import './Blogpost.css'
import React from 'react';
import {NavLink, useParams} from 'react-router-dom';
import posts from '../../constants/data.json';

function Blogpost() {
    const {id} = useParams();

    const post = posts.find((item) => item.id === Number(id));

    if (!post) {
        return <p>Post not found</p>;
    }
    return (
        <div>
            <ul>
                <li className="blogpost-details">
                    <h1 className="blogpost-title">
                        {post.title}
                    </h1>
                    <h2 className="italics-text">{post.subtitle}</h2>
                    <p>Geschreven door <em>{post.author}</em> op {post.created}</p>
                    <p>
                        {post.content}
                    </p>
                    <p className="italics-text">
                        {post.comments} reacties - {post.shares} keer gedeeld
                    </p>
                    <hr />
                    <NavLink
                        className="back-to-overview"
                        to="/overview">Terug naar het overzicht</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Blogpost