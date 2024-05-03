# letter-display

This repository contains a project designed to automatically fetch newsletter emails and display their content on a website. The project uses Next.js, TypeScript, Supabase, and Tailwind CSS, with design inspiration drawn from Medium.

**Note**: The newslatter fetcher is in `letter-display-database` repository.

## Frontend

The frontend application, implemented in Next.js, dynamically displays all articles stored in the Supabase database using dynamic routes to generate post pages.

![Screenshot 2024-05-03 at 17 11 15](https://github.com/AurelDeveloper/letter-display/assets/150530607/e8a42b89-75db-48a6-a2ed-cb050ab8f7ce)
![Screenshot 2024-05-03 at 17 11 43](https://github.com/AurelDeveloper/letter-display/assets/150530607/0028952e-b81e-4b19-8f77-4f72387e831a)

### Dynamic Routes

The frontend utilizes dynamic routes to generate individual post pages based on the content stored in the Supabase database.

![Screenshot 2024-05-03 at 17 12 54](https://github.com/AurelDeveloper/letter-display/assets/150530607/6bfbe214-1f4c-4747-886d-e85eee04dfa0)

![Screenshot 2024-05-03 at 17 13 21](https://github.com/AurelDeveloper/letter-display/assets/150530607/923a92ae-182b-4af2-bec0-6153933f0e2f)

## Roadmap

- [ ] Improve `app/post/[id]/page.txs to display correctly the newslatter content.
- [ ] Ranked article feed.
- [ ] Views counter for the Ranked article feed.
- [ ] Multi newslatter fetcher.
- [ ] Create a newsletter hub where everyone can create an account and choose which newsletters they want to fetch and display on their feed. This project serves as the foundation for this newsletter hub.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AurelDeveloper/letter-display
   ```

2. Install dependencies:

   ```bash
   cd letter-display
   npm install
   ```

## Configuration

Set environment variables in a `.env.example` file:

   ```plaintext
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   ```
