import os
from fetcher import fetch_email

def job():
    new_email = fetch_email()
    if new_email is not None:
        os.system("../main.sh")

job()