import React, { Component } from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './Member.css';
import {Link } from "react-router-dom";
class Members extends Component{
    state = {
        id: "",
        name: "",
        scope: "",
        age: "",
        gender: "",
        mobileNumber: "",
        emai: "",
        dateOfJoininig: "",
        setColumnDefs: [
            { headerName: "id", field: "id" },
            { headerName: "name", field: "name" },
            { headerName: "scope", field: "scope" },
            { headerName: "age", field: "age" },
            { headerName: "gender", field: "gender" },
            { headerName: "mobileNumber", field: "mobileNumber" },
            { headerName: "emailId", field: "emailId" },
            { headerName: "dateOfJoininig", field: "dateOfJoininig" },
        ],
        rowData: [],
        defaultColDefs: {
            width: 150,
            editable: false,
            sortable: true,
            filter: 'agTextColumnFilter'

        }   
    }
    
    componentDidMount = () => {
        this.getMember();
    }
    getMember = () => {
        console.log("inside get");
        axios.get("http://localhost:8081/library/member")
            .then(response => {
                console.log('response', response)
                this.setState({ rowData: response.data })
                console.log('rowData=', this.state.rowData)
            })
            .catch(error => console.log("error occurred"))
        console.log('rowData2=', this.state.rowData)
        
    }
    addMember = () => {

    }
    render() {
        return (
            <>
                <h1>Members</h1><div >
                    <Link to ='/addMembers'>
                        <Button className=" btn-member" variant="primary" >Add Member</Button>
                        </Link>
                </div>
                <div
				className="ag-theme-balham table-member "
				style={{
                    height: '500px',
                    padding:'5px',
					width: '1200px'
				}}
			>
                    <AgGridReact
                        defaultColDef={this.state.defaultColDefs}
                        columnDefs={this.state.setColumnDefs}
                        rowData={this.state.rowData}
                        
                    >
                    </AgGridReact>
                    </div>
            </>
        );
    }
}
export default Members;
