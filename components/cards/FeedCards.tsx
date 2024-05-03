import React from 'react';
import Link from 'next/link';
import supabase from '../../utils/supabase';

export const revalidate = 0

export default async function Posts() {
    const { data: posts } = await supabase.from('posts').select('id, title, date, snippet, readtime, img, tags') // Include tags in the query

    if (!posts) {
        return <p>No posts found.</p>
    }

    return posts.map((post, index) => {
        console.log(post.tags); // Log the tags to the console
        return (
            <div
                className="border-b border-gray-300 pb-5 mx-auto max-w-md"
                key={post.id}
            >
                <div
                    className="flex justify-between gap-11"
                >
                    <div className="left_post">
                        <h3
                            className="my-2 text-2xl font-bold"
                        >
                            <Link href={`./posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </h3>
                        {post.snippet}

                        <div
                            className="mt-5 flex items-center justify-between"
                        >
                            <div
                                className="flex items-center gap-4"
                            >
                                <p className="text-gray-500 text-sm">{post.date}</p>
                                <span className="text-gray-500 text-sm mx-0.1">·</span>
                                <p className="text-gray-500 text-sm">{post.readtime} minute/-s</p>
                                <span className="text-gray-500 text-sm mx-0.1">·</span>
                                <p className=" bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold">{post.tags}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}