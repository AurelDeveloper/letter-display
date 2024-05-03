'use client'

import { useParams } from 'next/navigation'
import supabase from '../../../utils/supabase'
import './articles.css'

export default async function Post() {
    const { id } = useParams()
    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

    if (error) return <div>Failed to load post.</div>
    if (!post) return <div>Loading...</div>

    function createMarkup(html: string) {
        return { __html: html }
    }

    return (
        <div className="pl-5 pr-5 max-w-screen-md mx-auto mt-5 custom-prose article-style"
             dangerouslySetInnerHTML={createMarkup(post.content)}/>
    )
}