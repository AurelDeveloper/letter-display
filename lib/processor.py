from bs4 import BeautifulSoup
from lib.models import Article
from datetime import datetime
from lib.fetcher import email_content

processed_data = None

def process_html():
    global processed_data
    soup = BeautifulSoup(email_content, 'html.parser')

    title = soup.find('h1').text if soup.find('h1') else None
    image = soup.find('img')['src'] if soup.find('img') else None
    date = datetime.now().isoformat()
    content = str(soup)

    processed_data = Article(title, image, date, content).__dict__