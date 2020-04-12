import React,{Component} from 'react';
import axios from "axios";
import {Button,Card, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFastForward, faList, faStepBackward, faStepForward, faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";

export default class BookList extends Component{

    state={
        books:[],
        currentPage: 1,
        booksPerPage: 5
    };

    componentDidMount() {
        axios.get("http://localhost:8080/books/1/authors")
            .then(res => {
                this.setState({books:res.data})
                console.log(res.data)
            })
    }

    changePage=(e)=>{
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    };

    firstPage =()=>{
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: 1
            })
        }
    };

    prevPage =()=>{
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    };

    lastPage =()=>{
        if(this.state.currentPage < Math.ceil(this.state.books.length / this.state.booksPerPage)){
            this.setState({
                currentPage: Math.ceil(this.state.books.length / this.state.booksPerPage)
            })
        }
    };

    nextPage =()=>{
        if(this.state.currentPage < Math.ceil(this.state.books.length / this.state.booksPerPage)){
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    };







    render(){
        const{books, currentPage, booksPerPage} = this.state;
        const lastIndex = currentPage * booksPerPage;
        const firstIndex = lastIndex - booksPerPage;
        const currentBooks = books.slice(firstIndex, lastIndex);
        const totalPages = books.length / booksPerPage;

        const styleInput={
            width: "45px",
            border: "1px solid 17A2B8",
            color: "#17A2B8",
            textAlign: "center",
            fontWeight: "bold"
        };

        return(
            <Card className={"border border-dark bg-dark text-white mb-5"}>
                <Card.Header>
                    <FontAwesomeIcon icon={faList} />{" "}Book List
                </Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant={"dark"}>
                        <thead className="font-weight-bold">
                        <tr>
                            <td>Title</td>
                            <td>Author</td>
                            <td>Copies</td>
                        </tr>
                        </thead>
                        <tbody>
                        {currentBooks.map(book => {
                            return <tr key={book.author_id}>
                                <td>{book.bookId.name}</td>
                                <td>{book.name} {" "} {book.surname}</td>
                                <td>{book.bookId.num_of_copies}</td>
                            </tr>
                        })}
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer className={"mb-5"}>
                    <div style={{"float": "left"}}>
                        Current page: {currentPage}
                    </div>
                    <div style={{"float": "right"}}>
                        <InputGroup size={"sm"}>
                            <InputGroup.Prepend>
                                <Button onClick={this.firstPage} type="button" variant="outline-info" disabled={currentPage === 1}>
                                    <FontAwesomeIcon icon={faStepBackward} />First
                                </Button>
                                <Button onClick={this.prevPage} type="button" variant="outline-info" disabled={currentPage === 1}>
                                    <FontAwesomeIcon icon={faStepBackward} />Prev
                                </Button>

                            </InputGroup.Prepend>
                            <FormControl
                                style={styleInput}
                                className={"bg-dark"}
                                name={"currentPage"}
                                value={currentPage}
                                onChange={this.changePage}
                            />
                            <InputGroup.Append>
                                <Button onClick={this.nextPage} type="button" variant="outline-info" disabled={currentPage === totalPages}>
                                    <FontAwesomeIcon icon={faStepForward} />Next
                                </Button>
                                <Button onClick={this.lastPage} type="button" variant="outline-info">
                                    <FontAwesomeIcon icon={faStepForward} />Last
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </Card.Footer>
            </Card>
        )
    }
}