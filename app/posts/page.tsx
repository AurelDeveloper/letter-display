import Link from 'next/link'
import supabase from '../../utils/supabase'

export const revalidate = 0

export default async function Posts() {
    const { data: posts } = await supabase.from('posts').select('id, title, date, snippet, readtime, img')

    if (!posts) {
        return <p>No posts found.</p>
    }

    return posts.map((post) => {
        console.log(post.img);

        return (
            <Link href={`./posts/${post.id}`} key={post.id}>
                <div className="max-w-md mx-auto flex items-start">
                    <div className="flex-1">
                        <h1 className="max-w-sm mx-auto text-lg font-bold">{post.title}</h1>
                        <p className="max-w-sm mx-auto mb-4 align-middle">{post.snippet}</p>
                        <div className="max-w-sm mx-auto flex items-center">
                            <p className="flex-1">{post.date}</p>
                            <div className="border-l h-5 mx-2"></div>
                            <p className="flex-1">{post.readtime} minute/-s</p>
                        </div>
                        <div className="w-full border-t border-gray-200 my-4"></div>
                    </div>
                    <div className="flex-none align-middle">
                        <img src={post.img} className="w-[70px] h-[70px] object-cover" />
                    </div>
                </div>
            </Link>
        )
    })
}
