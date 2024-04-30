# LetterDisplay

This repository contains a project designed to automatically fetch newsletter emails and display their content on a website. The project uses Next.js, TypeScript, Supabase, and Tailwind CSS, with design inspiration drawn from Medium.

## Backend (Cron Job)

### Fetching and Processing

A TypeScript script (`fetch.ts`) runs daily as a cron job on Vercel (in the free version). This script automatically retrieves new emails from a specified sender and filters out advertising content by checking if the subject contains any of the filter words (defined in the `NON_NEWSLETTER_KEYWORDS` environment variable in `.env` file). If the email passes the filter, its content is extracted and passed to `processor.ts`.

### Processing (processor.ts)

The `processor.ts` code extracts the main title, main image, and a short snippet from the article text of the emails.

### Uploading to Database (uploader.ts)

The `uploader.ts` code attempts to store the extracted data in a Supabase database.

**Note**: The backend functionality is not yet fully operational and may require further development and testing.

## Frontend (Website)

The frontend application, implemented in Next.js, dynamically displays all articles stored in the Supabase database using dynamic routes to generate post pages.

### Dynamic Routes

The frontend utilizes dynamic routes to generate individual post pages based on the content stored in the Supabase database.

**Note**: The frontend is still under development and will require further enhancements and features.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AurelDeveloper/letter-display
   ```

2. Install dependencies:

   ```bash
   cd repository
   npm install
   ```

## Configuration

1. Set environment variables in a `.env.example` file:

   ```plaintext
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   SENDER_EMAIL=your_newsletter_sender_email
   NON_NEWSLETTER_KEYWORDS=keyword1,keyword2,keyword3
   ```

   Replace `your_supabase_url`, `your_supabase_key`, and `your_newsletter_sender_email` with your Supabase project URL, Supabase API key, and the email address of your newsletter sender. Add keywords to `NON_NEWSLETTER_KEYWORDS` to filter out non-newsletter emails.

2. Configure the Vercel cron job to execute `fetch.ts` daily.

## Usage

### Backend (Cron Job)

Run the cron job manually or let it execute automatically on Vercel:

```bash
npm run fetch
```

### Frontend (Website)

Start the Next.js development server:

```bash
npm run dev
```

Then open your browser and go to `http://localhost:3000` to view the website.

## Contribution

If you'd like to contribute to the project, please create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README with additional details based on your project's specific requirements and current development status.
