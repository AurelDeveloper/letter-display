import imaplib
import email

email_content = None

def fetch_email():
    global email_content
    mail = imaplib.IMAP4_SSL("imap.gmail.com")
    mail.login("marlon.profils@gmail.com", "auqh nuwf tecs ojqv")

    mail.select("inbox")
    result, data = mail.uid('search', None, '(FROM "hinoran.marlon@gmail.com")')

    if not data[0]:
        print("Keine E-Mails von 'hinoran.marlon@gmail.com' gefunden.")
        return None

    latest_email_uid = data[0].split()[-1]
    result, email_data = mail.uid('fetch', latest_email_uid, '(BODY[TEXT])')

    if not email_data[0][1]:
        print("Der Inhalt der letzten E-Mail von 'hinoran.marlon@gmail.com' konnte nicht abgerufen werden.")
        return None

    raw_email = email_data[0][1].decode("utf-8")
    email_message = email.message_from_string(raw_email)

    print(email_message)

    email_content = email_message.get_payload()