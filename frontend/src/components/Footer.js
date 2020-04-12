import React from "react";
import {Col, Container, Navbar} from "react-bootstrap";

const Footer =()=>{

    let year = new Date().getFullYear();
    return(
        <Navbar fixed="bottom" bg={"dark"} variant={"dark"}>
            <Container>
                <Col lg={12} className={"text-center text-muted"}>
                    <div>{year-1}-{year}, All right reserved by Hristijan Kostadinoski</div>
                </Col>
            </Container>
        </Navbar>
    )
};

export default Footer;