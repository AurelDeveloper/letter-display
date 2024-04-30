# LetterDisplay

This repository contains a project designed to automatically fetch newsletter emails and display their content on a website. The project uses Next.js, TypeScript, Supabase, and Tailwind CSS, with design inspiration drawn from Medium.

## Frontend (Website)

The frontend application, implemented in Next.js, dynamically displays all articles stored in the Supabase database using dynamic routes to generate post pages.

![Screenshot 2024-04-30 at 15 12 55](https://github.com/AurelDeveloper/letter-display/assets/150530607/dd287e59-8560-4cdd-b511-01b9bad0e53c)

### Dynamic Routes

The frontend utilizes dynamic routes to generate individual post pages based on the content stored in the Supabase database.

![Screenshot 2024-04-30 at 15 25 04](https://github.com/AurelDeveloper/letter-display/assets/150530607/47fff1d3-ea0c-4132-8775-4ace8ca5062a)

![Screenshot 2024-04-30 at 15 25 38](https://github.com/AurelDeveloper/letter-display/assets/150530607/88abddc7-618a-4966-89c7-bc788f29827a)

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
   
2. Configure the Vercel cron job to execute `fetch.ts` daily.
