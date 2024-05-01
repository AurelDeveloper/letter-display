// It's not finished yet

import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from './supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const { data, error } = await supabase
    .rpc('increment_views', { post_id: id });

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json({ data });
}