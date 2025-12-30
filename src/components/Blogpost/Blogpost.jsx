import './Blogpost.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../../constants/data.json';

function Blogpost() {
    const { id } = useParams();

    const post = posts.find((item) => item.id === Number(id));

    if (!post) {
        return <p>Post not found</p>;
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default Blogpost