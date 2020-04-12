import React, {Component} from "react";
import {Button, ButtonGroup, Card, InputGroup} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faUser, faUsers} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import MyToast from "./MyToast";
import {Link} from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";



class MemberList extends Component{

    state={
        members:[],
        search: ""
    };

    componentDidMount() {
        axios.get("http://localhost:8080/members")
            .then(res => {
                this.setState({members:res.data});
                console.log(res.data)
            })
    };

    deleteMember = (memberId) =>{
        axios.delete(`http://localhost:8080/members/${memberId}`)
            .then(res => {
                if(res.data != null){

                    this.setState({show: true})
                    setTimeout(()=>{
                        this.setState({show: false})
                    },3000)
                    this.setState({
                        members: this.state.members.filter(member => member.id !== memberId)
                    })
                }else{
                    this.setState({show: false})
                }
            })
    };

    searchMember=(e)=>{
        this.setState({
            search: e.target.value
        })
    };

    render(){
        const members = this.state.members.filter((member)=>{
            return member.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        return(

            <div>
                <InputGroup className={"mb-5"}>
                    <InputGroup.Prepend>
                        <InputGroup.Text className={"bg-dark text-white mr-2"}>Find member</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        className={"bg-dark text-white"}
                        type={"text"}
                        value={this.state.search}
                        onChange={this.searchMember}
                    />
                </InputGroup>



                <div style={{"display": this.state.show ? "block": "none"}}>
                    <MyToast show={this.state.show} message={'Members deleted successfully.'} type={"danger"} />
                </div>
                <Card className={"border border-dark bg-dark text-white mb-5"}>
                    <Card.Header><FontAwesomeIcon icon={faUsers} /> Members List</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant={"dark"}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {members.map(item => {
                                return <tr key={item.id}>
                                    <td>
                                        <FontAwesomeIcon icon={faUser} />{' '}
                                        {item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Link to={"edit/" + item.id}
                                                  className={"btn btn-sm btn-outline-primary mr-3"}
                                            >
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                            <Button
                                                onClick={this.deleteMember.bind(this, item.id)}
                                                size={"sm"} variant={"outline-danger"}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>


        )
    }
}

export default MemberList;