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
            <div className="mr-4 pb-8 flex overflow-hidden sm:mr-0 max-w-xl mx-auto" key={post.id}>
                <div className="w-full block pr-5 flex-grow">
                    <Link href={`./posts/${post.id}`} key={post.id}>
                        <div className="overflow-hidden cursor-pointer">
                            <h2 className="mt-2 overflow-hidden max-h-14 leading-8 text-4xl font-bold sm:text-base sm:leading-5">{post.title}</h2>
                            <h4 className="text-base mb-2 tracking-tight sub-opacity-54">{post.snippet}</h4>
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
                        className="wide-thumbnail-img sm:hidden cursor-pointer"
                        style={{
                            backgroundImage: `url(${post.img})`,
                            width: "180px",
                            height: "112px",
                            backgroundSize: "cover"
                        }}
                    ></div>
                    <div
                        className="sub-thumbnail-img hidden sm:block cursor-pointer"
                        style={{
                            backgroundImage: `url(${post.img})`,
                            width: "140px",
                            height: "112px",
                            backgroundSize: "cover"
                        }}
                    ></div>
                </Link>
            </div>
        )
    })
}