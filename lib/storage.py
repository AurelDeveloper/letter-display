import os
from supabase import create_client, Client
from lib.processor import processed_data

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

def save_data_to_supabase():
    response = supabase.table('articles').insert(processed_data).execute()
    if response.error:
        print(f'Fehler beim Speichern des Artikels: {response.error}')