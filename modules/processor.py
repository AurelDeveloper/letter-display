import json
from bs4 import BeautifulSoup
import datetime
from models import Article
from fetcher import fetch_email

def process_html(email_content):
    global processed_data
    soup = BeautifulSoup(email_content, 'html.parser')

    title = soup.find('h1').text if soup.find('h1') else None
    image = soup.find('img')['src'] if soup.find('img') else None
    date = datetime.datetime.now().isoformat()
    content = str(soup)
    snippet = soup.find('p').text[:40] if soup.find('p') else None

    processed_data = Article(title, image, date, content, snippet).__dict__

    with open('../articles.json', 'w') as json_file:
        json.dump(processed_data, json_file)

if __name__ == "__main__":
    email_content = fetch_email()
    process_html(email_content)