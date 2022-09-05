import React from "react";
import Card from "react-bootstrap/Card";

const Projects = () => {
    return (
        <>
            <div className="container text-center">
                <h2>Projects</h2>
                <div className="row">
                    {projectsList.map((project) => (
                        <div className="col">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={project.image} />
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <Card.Link href={project.link}>
                                        {project.linkname}
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="container">
                <h2>Portfolio</h2>
                <div className="row text-center">
                    <div className="col-sm-4">
                        <p>
                            Here is a single page webpage for a new small
                            environmental nonprofit that hires under-resourced
                            youth to collect compost from local restaurants via
                            bicycles. It uses HTML, CSS, JavaScript, and
                            Bootstrap.
                        </p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <p>
                        This is a mockup for a New York based musician. We used
                        React to make this single page application
                    </p>
                </div>
                <div class="col-sm-4">
                    <p>
                        This was my first ever project, a simple game of
                        identifying edible mushrooms. It was created using
                        Scratch
                    </p>
                </div>
            </div> */}
        </>
    );
};

export default Projects;

const projectsList = [
    {
        id: 0,
        name: "COllege Bound",
        image: "../img/IMG_6433.jpg",
        description:
            "Mobile App UI mockup that allows users to search through colleges, uses Redux to mark them Favorites, and uses hooks for a to-do list. Built with React Native and JavaScript to support first-generation students on the steps to postsecondary",
        link: "https://github.com/nataliehenson/COllegeBound",
        linkname: "Github Link",
    },
    {
        id: 1,
        name: "Dane Scozzari",
        image: "../img/musicianshot.png",
        description:
            "Web Application for a jazz musician to publish gigs, listen to his music, and submit a contact form that sends to the musician directly. Built with React, React-Strap, Javascript, and CSS",
        link: "https://www.danescozzari.com/",
        linkname: "Live Site",
    },
    {
        id: 2,
        name: "SoilCycle",
        image: "../img/SoilCyclePic.png",
        description:
            "Single page web application for a small environmental nonprofit based on hiring youth to collect compost. Built using Bootstrap, Javascript, HTML, and CSS",
        link: "https://github.com/nataliehenson/soilCycle",
        linkname: "Github Link",
    },
];
