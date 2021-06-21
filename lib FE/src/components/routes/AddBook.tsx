import React, { Component } from 'react';
import './Member.css';
import axios from 'axios';
import {Link } from "react-router-dom";
import { Form, Button, FormLabel, FormGroup } from 'react-bootstrap';



class AddBook extends Component {
    state = {
   "title":"",
    "author":"",
    "price":"",
    "date":"",
    "shelfNo":""
    }
    handleTitle = (event) => {
        console.log("event title", event.target.value);
        this.setState({
            title: event.target.value
        })
    }
    handleAuthor = (event) => {
        console.log("event author", event.target.value);
        this.setState({
            author: event.target.value
        })
    }
    handlePrice = (event) => {
        console.log("event price", event.target.value);
        this.setState({
            price: event.target.value
        })
    }
    handleDateOfPublish = (event) => {
        console.log("event dateOfPublish", event.target.value);
        this.setState({
            date: event.target.value
        })
    }
    handleShelfNo = (event) => {
        console.log("event shelfNo", event.target.value);
        this.setState({
            shelfNo: event.target.value
        })
    }
    handleSubmit = (event) => {

        // console.log("event ",event);
        //  event.preventDefault();
        console.log("inside add");
        // console.log("name", this.state.name,
        //     "age:", this.state.age,
        //     "gender:", this.state.gender,
        //     "scope:", this.state.scope,
        //     "mobileNumber:", this.state.mobileNumber,
        //     "emailId:", this.state.emailId,
        //     "dateOfJoininig:", this.state.dateOfJoininig,)
        axios.post("http://localhost:8081/library/books", {
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            date: this.state.date,
            shelfNo: this.state.shelfNo   

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
    Title
    <br></br>
    <input className="form-input" type="text" name="name" onChange={this.handleTitle} />
    </label>
    <br></br>
  <label>
    Author
    <br></br>
    <input className="form-input" type="text" name="Age"onChange={this.handleAuthor}  />
    </label><br></br>
  
  <label>
    Price
    <br></br>
    <input className="form-input" type="text" name="Age"onChange={this.handlePrice}  />
    </label><br></br>
 
  <label>
    Date of Publish
    <br></br>
    <input className="form-input" type="text" name="Age"onChange={this.handleDateOfPublish}  />
    </label><br></br>
 
  <label>
    Shelfno
    <br></br>
    <input className="form-input" type="text" name="Age"onChange={this.handleShelfNo}  />
    </label><br></br>
 

                        <input className="primary" type="submit" value="Submit" />
                        
</form>
</div>
        )
    }
}

export default AddBook;



