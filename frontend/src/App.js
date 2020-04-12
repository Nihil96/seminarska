import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";

import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import Footer from "./components/Footer";
import Members from "./components/Members";
import MemberList from "./components/MemberList";
import BookList from "./components/BookList";




function App() {

    const marginTop ={
        marginTop: "20px"
    };

    return (
        <BrowserRouter>
        <Navigation />
        <Container>
        <Row>
        <Col lg={12} style={marginTop}>
        <Switch>
        <Route path="/welcome" exact component={Welcome} />
    <Route path="/add" exact component={Members} />
    <Route path="/edit/:id" exact component={Members} />
    <Route path="/list" exact component={MemberList} />
    <Route path="/books" exact component={BookList} />
    </Switch>
    </Col>
    </Row>
    </Container>
    <Footer/>
    </BrowserRouter>
);
}

export default App;
