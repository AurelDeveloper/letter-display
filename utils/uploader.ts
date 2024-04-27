import supabase from './supabase'
import { Post } from './post'
import { globalState } from './processor'

async function uploader(post: Post) {
    const { error } = await supabase
        .from('posts')
        .insert([
            {
                title: post.title,
                image: post.image,
                date: post.date,
                content: post.content,
                snippet: post.snippet,
                readtime: post.readtime
            },
        ])

    if (error) {
        console.error('Error saving post:', error)
    } else {
        console.log('Post successfully saved in the database')
    }
}

if (globalState.postGlobal) {
    uploader(globalState.postGlobal)
}
export { uploader };
