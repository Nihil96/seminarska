import React from "react";
import {Jumbotron} from "react-bootstrap";


const Welcome = () =>{
    return(
        <Jumbotron className="bg-dark text-white">
            <h1>Welcome to the library</h1>
            <blockquote className="blockquote mb-0">
                <p>
                    It is the mark of an educated mind to be able to entertain a thought without accepting it.
                </p>
                <footer className="blockquote-footer">
                    Aristotle
                </footer>

            </blockquote>
        </Jumbotron>
    )
};

export default Welcome;