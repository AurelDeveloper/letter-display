import Link from 'next/link'
import supabase from '../../utils/supabase'

export const revalidate = 0

export default async function Posts() {
    const { data: posts } = await supabase.from('posts').select('id, title, date, snippet, readtime, img')

    if (!posts) {
        return <p>No posts found.</p>
    }

    return posts.map((post, index) => {
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
                                <p className="text-gray-500 text-sm">{post.readtime} minute/-s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}