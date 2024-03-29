from lib import fetcher, processor, storage

def main():
    fetcher.fetch_email()
    processor.process_html()
    storage.save_data_to_supabase()

if __name__ == "__main__":
    main()