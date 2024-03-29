import imaplib
import email
import re
import os

def email_checker(email_content):
    newsletter_keywords = os.environ['NEWSLETTER_KEYWORDS'].split(',')
    non_newsletter_keywords = os.environ['NON_NEWSLETTER_KEYWORDS'].split(',')

    for keyword in newsletter_keywords:
        if re.search(keyword, email_content, re.IGNORECASE):
            return True

    for keyword in non_newsletter_keywords:
        if re.search(keyword, email_content, re.IGNORECASE):
            return False

    return False

def fetch_latest_email():
    mail = imaplib.IMAP4_SSL(os.environ['IMAP_SERVER'])
    mail.login(os.environ['EMAIL_USER'], os.environ['EMAIL_PASS'])

    mail.select("inbox")
    result, data = mail.uid('search', None, f'(FROM \'{os.environ["EMAIL_FROM"]}\')')

    if not data[0]:
        print(f"Keine E-Mails von \"{os.environ['EMAIL_FROM']}\" gefunden.")
        return None

    latest_email_uid = data[0].split()[-1]
    result, email_data = mail.uid('fetch', latest_email_uid, '(BODY[TEXT])')

    if not email_data[0][1]:
        print(f"Der Inhalt der letzten E-Mail von \"{os.environ['EMAIL_FROM']}\" konnte nicht abgerufen werden.")
        return None

    raw_email = email_data[0][1].decode("utf-8")
    email_message = email.message_from_string(raw_email)

    print(email_message)

    email_content = email_message.get_payload()

    if not email_checker(email_content):
        print("Die E-Mail wurde als Nicht-Newsletter erkannt. Der Job wird abgebrochen.")
        return None

    return email_content

if __name__ == "__main__":
    email_content = fetch_latest_email()
    print(email_content)