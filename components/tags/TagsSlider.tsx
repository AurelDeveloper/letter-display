import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';

type Props = {
    onTagSelected: (tag: string | null) => void;
};

export default function TagsSlider({ onTagSelected }: Props) {
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    useEffect(() => {
        fetchTags();
    }, []);

    const fetchTags = async () => {
        const { data: posts, error } = await supabase.from('posts').select('tags');
        if (error) console.log("Error fetching tags: ", error);
        else {
            const tags = posts.flatMap(post => post.tags.split(',')).filter(tag => tag);
            setTags([...new Set(tags)]);
        }
    };

    const handleTagClick = (tag: string) => {
        if (tag === selectedTag) {
            setSelectedTag(null);
            onTagSelected(null);
        } else {
            setSelectedTag(tag);
            onTagSelected(tag);
        }
    };

    return (
        <div className="tags-slider flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => (
                <button
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className={`px-5 rounded-3xl px-4 py-0.5 text-lg font-semibold border border-gray-400 p-1 transition-colors duration-200 ease-in-out ${tag === selectedTag ? 'bg-gray-400' : 'hover:bg-gray-200'}`}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}