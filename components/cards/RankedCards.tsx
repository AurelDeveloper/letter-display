// This component is not finished yet. It is supposed to be a card that displays the posts in a ranked order.

import React from "react";
import Link from 'next/link'
import supabase from '../../utils/supabase'

export const revalidate = 0

export default async function Posts() {
    const {data: posts} = await supabase
        .from('posts')
        .select('id, title, date, snippet, readtime, img, views')
        .order('views', {ascending: true})

    if (!posts) {
        return <p>No posts found.</p>
    }

    return posts.map((post, index) => {
        return (
            <div className="mid-container max-w-xl mx-auto" key={post.id}>
                <div className="mr-4 pb-8 flex overflow-hidden">
                    <div className="h-full -mt-2 mr-4">
                        <span className="main-grey text-3xl font-bold">
                            {("0" + (index + 1).toString()).slice(("0" + (index + 1).toString()).length - 2)}
                        </span>
                    </div>
                    <div className="w-full block pr-5 flex-grow">
                        <Link href={`./posts/${post.id}`} key={post.id}>
                            <h2 className="cursor-pointer max-w-custom pr-5 ml-auto mb-4 align-middle font-bold text-lg">{post.title}</h2>
                        </Link>
                        <p className="max-w-custom pr-5 ml-auto mb-4 align-middle">{post.snippet}</p>
                        <div className="max-w-sm mx-2 flex items-start justify-start">
                            <p className="text-zinc-500">{post.date}</p>
                            <div className="border-l h-5 mx-4"></div>
                            <p className="text-zinc-500">{post.readtime} minute/-s</p>
                            <div className="border-l h-5 mx-4"></div>
                            <p className="text-zinc-500">{post.views} views</p>
                        </div>
                        <div className="w-full border-t border-gray-200 my-4"></div>
                    </div>
                    <div className="flex-none self-center">
                        <img src={post.img} className="w-[90px] h-[90px] object-cover"/>
                    </div>
                </div>
            </div>
        )
    })
}