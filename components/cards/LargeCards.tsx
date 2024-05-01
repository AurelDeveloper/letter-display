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
            <div className="overflow-hidden sm-border-b sm:pb-8 sm:mb-6 max-w-xl mx-auto" key={post.id}>
                <Link href={`../../app/posts/${post.id}`}>
                    <div
                        className="w-full cursor-pointer"
                        style={{
                            backgroundImage: `url(${post.img})`,
                            minHeight: "240px",
                            backgroundSize: "cover"
                        }}
                    ></div>
                </Link>
                <Link href={`./posts/${post.id}`} key={post.id}>
                    <div>
                        <h2 className="text-2xl mt-2 leading-6 cursor-pointer">{post.title}</h2>
                        <h4 className="text-lg my-2 tracking-tight sub-opacity-54 w-10/12 cursor-pointer">
                            {post.snippet}
                        </h4>
                    </div>
                </Link>
                <div className="sub-text mt-2">
                    <p className="flex-1">{post.date}</p>
                    <div className="border-l h-5 mx-2"></div>
                    <p className="flex-1">{post.readtime} minute/-s</p>
                </div>
            </div>
        )
    })
}