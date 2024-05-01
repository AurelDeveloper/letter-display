import Link from 'next/link'
import supabase from '../../utils/supabase'

export const revalidate = 0

export default async function Posts() {
    const { data: posts } = await supabase.from('posts').select('id, title, date, snippet, readtime, img')

    if (!posts) {
        return <p>No posts found.</p>
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {posts.map((post, index) => {
                return (
                    <div className="flex justify-center mr-4 pb-8 overflow-hidden sm:mr-0 max-w-xl mx-auto" key={post.id}>
                        <div className="w-full block pr-5 flex-grow">
                            <Link href={`./posts/${post.id}`} key={post.id}>
                                <div className="overflow-hidden cursor-pointer">
                                    <h2 className="mt-2">{post.title}</h2>
                                </div>
                            </Link>
                            <div className="sub-text mt-2">
                                <p className="flex-1">{post.date}</p>
                                <div className="border-l h-5 mx-2"></div>
                                <p className="flex-1">{post.readtime} minute/-s</p>
                            </div>
                        </div>
                        <Link href={`./posts/${post.id}`} key={post.id}>
                            <div
                                className="thumbnail-img cursor-pointer"
                                style={{
                                    backgroundImage: `url(${post.img})`,
                                    width: "100px",
                                    height: "100px",
                                    backgroundSize: "cover"
                                }}
                            ></div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}