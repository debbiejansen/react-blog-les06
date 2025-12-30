import './Overview.css'
import React from 'react';
import posts from '../../constants/data.json';
import {Link} from 'react-router-dom';

function Overview() {
    return (
        <div className="page-container-overview">

            {/*<h1>Overzicht ({posts.length} blogs)</h1>*/}
            <ul className="blog-list">
                {posts.map((post) => {
                    return (
                        <li key={post.id} className="blog-item">
                            <h3 className="blog-name">
                                <Link to={"/posts/" + post.id}>
                                    {post.title} ({post.author})
                                </Link>
                            </h3>
                            <p>
                                {post.comments} reacties - {post.shares} keer gedeeld
                            </p>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default Overview