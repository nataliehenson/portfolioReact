import React from "react";
import headshot from "../img/DSC_4849-removebg-preview.png";

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col natalie">
                        <h3>Hi, I'm</h3>
                        <h1>Natalie Henson,</h1>
                        <h3>a Full Stack Software Developer</h3>
                    </div>
                    <div className="col natalie">
                        <img src={headshot} alt="headshot" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
