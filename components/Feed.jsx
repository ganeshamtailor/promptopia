'use client';

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) =>(
                <PromptCard
                    key={post.id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {

    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchText(searchValue);

        // to filter posts based on search
    const filtered = posts.filter((post) =>
    post.prompt.toLowerCase().includes(searchValue)||
    post.tag.toLowerCase().includes(searchValue) ||
    post.creator.username.toLowerCase().includes(searchValue) 
    );

    setFilteredPosts(filtered);
    }

    const handleTagClick = (tag) => {
        // Filter posts based on clicked tag
        const filtered = posts.filter((post) => post.tag.includes(tag));
        setFilteredPosts(filtered);
    
        // Set the clicked tag as the search text
        setSearchText(tag);
      };
    

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json();

            setPosts(data);
        }

        console.log(posts);

        fetchPosts();
    }, []);




    return ( 
        <section className="feed">
        <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
        </form>


        <PromptCardList
        data={searchText ? filteredPosts : posts}
        handleTagClick={handleTagClick}
        />

        </section>
     );
}
 
export default Feed;