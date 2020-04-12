import React, {Component} from "react";
import {Card, Form, Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import axios from "axios";
import MyToast from "./MyToast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faList, faPlusSquare, faSave, faUndo} from '@fortawesome/free-solid-svg-icons';

export default class Members extends Component{

    state={
        id: "",
        name: "",
        surname: "",
        gender:"",
        phone:"",
        show: false
    };

    componentDidMount() {
        const memberId = +this.props.match.params.id;
        if(memberId){
            this.findMemberById(memberId)
        }
    }

    findMemberById=(memberId)=>{
        axios.get(`http://localhost:8080/members/${memberId}`)
            .then(res=>{
                if(res.data != null){
                    this.setState({
                        id:res.data.id,
                        name:res.data.name,
                        surname:res.data.surname,
                        gender:res.data.gender,
                        phone:res.data.phone
                    })
                }
            }).catch(err=>{
            console.log("error "+err)
        })

    };


    submitMember=(e)=>{
        e.preventDefault();

        const member ={
            name: this.state.name,
            surname: this.state.surname,
            gender:this.state.gender,
            phone:this.state.phone
        };

        axios.post("http://localhost:8080/members", member)
            .then(res => {
                if(res.data != null){
                    this.setState({show: true, "method": "post"})
                    setTimeout(()=>{
                        this.setState({show: false})
                    },3000)
                } else{
                    this.setState({show: false})
                }

            });
        this.setState({
            name: "",
            surname: "",
            gender:"",
            phone:""
        })
    };

    updateMember=(e)=>{
        e.preventDefault();

        const member ={
            id:this.state.id,
            name: this.state.name,
            surname: this.state.surname,
            gender:this.state.gender,
            phone:this.state.phone
        };

        axios.put(`http://localhost:8080/members/${this.state.id}`, member)
            .then(res => {
                if(res.data != null){
                    this.setState({show: true, "method": "put"})
                    setTimeout(()=>{
                        this.setState({show: false})
                    },3000);
                    setTimeout(()=>{
                        this.memberList()
                    },3000);
                } else{
                    this.setState({show: false})
                }

            });
        this.setState({
            id: "",
            name: "",
            surname: "",
            gender:"",
            phone:""
        })
    };

    memberChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    resetMember=()=>{
        this.setState({
            name: "",
            surname: "",
            gender:"",
            phone:""
        })
    };

    memberList=()=>{
        return this.props.history.push("/list");
    };



    render(){
        const {name,surname,gender,phone} = this.state;
        return(

            <div>
                <div style={{"display": this.state.show ? "block": "none"}}>
                    <MyToast show={ this.state.show} message={this.state.method === 'put' ?  'Members updated successfully.' : 'Members saved successfully.' } type={"success"} />
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Edit member" : "add new member"}</Card.Header>

                    <Form onReset={this.resetMember}
                          onSubmit={this.state.id ? this.updateMember : this.submitMember}
                          id={"memberFormId"}
                    >
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId={"formGridName"}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required type="text"
                                                  autoComplete="off"
                                                  name="name"
                                                  value={name}
                                                  onChange={this.memberChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter member's name" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId={"formGridSurname"}>
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control required type="text"
                                                  autoComplete="off"
                                                  name="surname"
                                                  value={surname}
                                                  onChange={this.memberChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter member's surname" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId={"formGridGender"}>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control required type="text"
                                                  autoComplete="off"
                                                  name="gender"
                                                  value={gender}
                                                  onChange={this.memberChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter member's gender" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId={"formGridPhone"}>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control required type="text"
                                                  autoComplete="off"
                                                  name="phone"
                                                  value={phone}
                                                  onChange={this.memberChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter member's phone" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign": "right"}}>
                            <Button size="sm" variant="success" type="submit" className={"mr-2"}>
                                <FontAwesomeIcon icon={faSave} />{this.state.id ? "Edit" : "Save"}
                            </Button>
                            <Button className="mr-2" size="sm" variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>
                            <Button size="sm" variant="info" type="button" onClick={this.memberList}>
                                <FontAwesomeIcon icon={faList} /> Members list
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>



        )
    }
}

