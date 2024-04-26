'use client'

import { useParams } from 'next/navigation'
import supabase from '../../../utils/supabase'

export default async function Post() {
    const { id } = useParams()
    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

    if (error) return <div>Failed to load post.</div>
    if (!post) return <div>Loading...</div>

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: post.content }} />
    )
}
