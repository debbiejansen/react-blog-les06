import './Blogpost.css'
import React from "react";
import { useParams } from "react-router-dom";

function Blogpost() {
    const { id } = useParams();

    return (
        <div>Het productnummer is {id}</div>
    )
}

export default Blogpost