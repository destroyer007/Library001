import React, { Component } from 'react';
import './Member.css';
import axios from 'axios';
import {Link } from "react-router-dom";
import { Form, Button, FormLabel, FormGroup } from 'react-bootstrap';



class AddMember extends Component {
    state = {
   "scope":"Non-Admin",
    "name":"",
    "age":"",
    "gender":"Male",
    "mobileNumber":"",
    "emailId":"",
    "dateOfJoininig":""
    }
    handleName = (event) => {
        console.log("event name", event.target.value);
        this.setState({
            name: event.target.value
        })
    }
    handleAge = (event) => {
        console.log("event age", event.target.value);
        this.setState({
            age: event.target.value
        })
    }
    handleScope = (event) => {
        console.log("event Scope", event.target.value);
        this.setState({
            scope: event.target.value
        })
    }
    handleGender = (event) => {
        console.log("event gender", event.target.value);
        this.setState({
            gender: event.target.value
        })
    }
    handleMobileNumber = (event) => {
        console.log("event mobileNumber", event.target.value);
        this.setState({
            mobileNumber: event.target.value
        })
    }
    handleEmailId = (event) => {
        console.log("event EmailId", event.target.value);
        this.setState({
            emailId: event.target.value
        })
    }
    handleDateOfJoininig = (event) => {
        console.log("event EmailId", event.target.value);
        this.setState({
            dateOfJoininig: event.target.value
        })
    }
    handleSubmit = (event) => {

        // console.log("event ",event);
        //  event.preventDefault();
        console.log("inside add");
        console.log("name", this.state.name,
            "age:", this.state.age,
            "gender:", this.state.gender,
            "scope:", this.state.scope,
            "mobileNumber:", this.state.mobileNumber,
            "emailId:", this.state.emailId,
            "dateOfJoininig:", this.state.dateOfJoininig,)
        axios.post("http://localhost:8081/library/member", {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            scope: this.state.scope,
            mobileNumber: this.state.mobileNumber,
            emailId: this.state.emailId,
            dateOfJoininig: this.state.dateOfJoininig,
            

        })
            .then(response => {
                console.log('response', response)
            })
            .catch(error => console.log("error occurred"))
        event.preventDefault();
    }
    submit=(event)=>{
        console.log("event", event);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                    <Link to ='/members'>
                        <Button className=" btn-addMember" variant="primary" >Back </Button>
                        </Link>
 

<form className="addMember-form" onSubmit={this.handleSubmit}>
    <br></br>
    <br></br>
    
  <label>
    Name
    <br></br>
    <input className="form-input" type="text" name="name" onChange={this.handleName} />
    </label>
    <br></br>
  <label>
    Age
    <br></br>
    <input className="form-input" type="text" name="Age"onChange={this.handleAge}  />
    </label><br></br>
  <label>
    Gender
    <br></br>
    {/* <input type="text" name="Gender" onChange={this.handleGender} /> */}
    <select className="form-input" name="Gender" onChange={this.handleGender} value= {this.state.gender} >
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Third Gender">Third Gender</option>
    <option >Do not wish to declare</option>
</select>
    </label><br></br>
  <label>
    Mobile Number
    <br></br>
    <input className="form-input" type="text" name="Mobile Number" onChange={this.handleMobileNumber} />
    </label><br></br>
  <label>
    Email ID
    <br></br>
    <input className="form-input" type="text" name="Email ID" onChange={this.handleEmailId}  />
    </label><br></br>
  <label>
    Scope
    <br></br>
    <select className="form-input" name="Scope" onChange={this.handleScope} >
    <option value="Non-Admin">Non-Admin</option>
    <option value="Admin">Admin</option>
    </select>
    </label>
    <br></br>
  <label>
      
    Date Of joining me
    <br></br>
    <input className="form-input" type="text" name="Date Of joining" onChange={this.handleDateOfJoininig} />
    </label><br></br>
                    <input className = "primary"type="submit" value="Submit" />
</form>
</div>
        )
    }
}

export default AddMember;



