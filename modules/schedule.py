import os
import imaplib
import email
import json
from email.header import decode_header
from dotenv import load_dotenv

# Load the .env.local file
load_dotenv('.env.local')

# Access the environment variables
IMAP_SERVER = os.getenv('IMAP_SERVER')
EMAIL_USER = os.getenv('EMAIL_USER')
EMAIL_PASS = os.getenv('EMAIL_PASS')
EMAIL_FROM = os.getenv('EMAIL_FROM')

def job():
    # Connect to the server
    mail = imaplib.IMAP4_SSL(IMAP_SERVER)

    # Login to the email account
    mail.login(EMAIL_USER, EMAIL_PASS)

    # Select the mailbox you want to check
    mail.select("inbox")

    # Search for specific mail
    result, data = mail.uid('search', None, f'(FROM "{EMAIL_FROM}")')
    email_ids = data[0].split()

    # Load the processed emails from the JSON file
    with open('processed_emails.json', 'a+') as f:
        f.seek(0)
        try:
            processed_emails = json.load(f)
        except json.JSONDecodeError:
            processed_emails = []

    # Go through all the emails from EMAIL_FROM
    for email_id in email_ids:
        # If the email has not been processed before
        if email_id.decode("utf-8") not in processed_emails:
            # Fetch the email body
            result, email_data = mail.uid('fetch', email_id, '(BODY[TEXT])')

            if result == 'OK':
                os.system("../main.sh")
                processed_emails.append(email_id.decode("utf-8"))

    # Save the updated list of processed emails to the JSON file
    with open('processed_emails.json', 'w') as f:
        json.dump(processed_emails, f)

job()