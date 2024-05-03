# letter-display

This repository contains a project designed to automatically fetch newsletter emails and display their content on a website. The project uses Next.js, TypeScript, Supabase, and Tailwind CSS, with design inspiration drawn from Medium.

**Note**: The newslatter fetcher is in `letter-display-database` repository.

## Frontend

The frontend application, implemented in Next.js, dynamically displays all articles stored in the Supabase database using dynamic routes to generate post pages.

![Screenshot 2024-05-03 at 16 40 33](https://github.com/AurelDeveloper/letter-display/assets/150530607/bb7b7ca4-4e7d-4c76-8498-1135ded4f935)

### Dynamic Routes

The frontend utilizes dynamic routes to generate individual post pages based on the content stored in the Supabase database.

![Screenshot 2024-05-03 at 16 42 27](https://github.com/AurelDeveloper/letter-display/assets/150530607/0e40af1d-cf36-4b80-b667-2e6954145ff5)

![Screenshot 2024-04-30 at 15 25 38](https://github.com/AurelDeveloper/letter-display/assets/150530607/88abddc7-618a-4966-89c7-bc788f29827a)

## Roadmap

- [ ] Ranked article feed
- [ ] Views counter for the Ranked article feed
- [ ] Multi newslatter fetcher
- [ ] Create a newsletter hub where everyone can create an account and choose which newsletters they want to fetch and display on their feed. This project serves as the foundation for this newsletter hub

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
