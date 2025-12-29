import './Home.css'
import React from "react";
import logo from "../../assets/logo-white.png";

function Home() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Bij BlOGventure geloven we in de kracht van woorden*</h1>

        </div>
    );
}

export default Home