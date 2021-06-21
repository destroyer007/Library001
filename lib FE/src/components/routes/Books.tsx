import React, { Component } from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Link } from "react-router-dom";

class Books extends Component{
    state = {
        title: "",
        author: "",
        price: "",
        dateOfPublish: "",
        shelfNo: "",
        setColumnDefs: [
            { headerName: "title", field: "title" },
            { headerName: "author", field: "author" },
            { headerName: "price", field: "price" },
            { headerName: "dateOfPublish", field: "date" },
            { headerName: "shelfNo", field: "shelfNo" },
            
        ],
        rowData: [],
        defaultColDefs: {
            // width: 100,
            editable: false,
            sortable: true,
            filter:'agTextColumnFilter'

        }
    }
    componentDidMount = () => {
        this.getBooks()
    }
    getBooks = () => {
        console.log("inside get");
        axios.get("http://localhost:8080/library/books")
            .then(response => {
                console.log('response', response)
                this.setState({ rowData: response.data })
                console.log('rowData=', this.state.rowData)
            })
            .catch(error => console.log("error occurred"))
        console.log('rowData2=', this.state.rowData)
        
    }
    render() {
        return (
            <>
                <h1>Books</h1>
                <div >
                    <Link to="/addBook">
                        <Button className="float-right" variant="info">Add Book</Button>
                        </Link>
                </div>
                <div
				className="ag-theme-balham"
				style={{
                    height: '500px',
                    padding:'12px',
					width: '1000px'
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
export default Books;