import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navigation =()=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Link className={"navbar-brand"} to={"welcome"}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png" width={"25"} height={"25"} alt={"brand"}/>Library
            </Link>

            <Nav className="mr-auto">
                <Link to={"add"} className={"nav-link"}>Add member</Link>
                <Link to={"list"} className={"nav-link"}>Members list</Link>
                <Link to={"books"} className={"nav-link"}>Books list</Link>
            </Nav>
        </Navbar>
    )

};

export default Navigation;