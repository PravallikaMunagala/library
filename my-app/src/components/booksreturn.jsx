import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class BooksReturn extends React.Component {
    state = {
        booksreturned: [],
    };
    componentDidMount() {
        axios
            .get("http://localhost:8080/lms/viewbooklist")
            .then((response) => {
                console.log(response);
                this.setState({ booksreturned: response.data });
            })
            .catch((error) => console.log(error));
    }
    handleDelete = (id) => {
        axios
            .delete(`http://localhost:8080/lms/deleteReturnBookDetails/${id}`)
            .then((res) => {
                const booksreturned = this.state.booksreturned.filter(
                    (au) => au.id != id
                );
                this.setState({ booksreturned: booksreturned });
            });
    };
    render() {
        return (
            <div className="container">
                <Link
                    to="/returnbooks/add"
                    className="btn btn-secondary btn-large mt-3 float-end"
                >
                    Add
                </Link>
                <h1>Books Page</h1>
                <table className="table w-80 mx-auto mt-5">
                    <thead>
                        <tr>
                            <th>BookReturnId</th>
                            <th>ReturnedDate</th>
                            <th>DelayedDays</th>
                            <th>Penalty</th>
                            <th>Penalty Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.booksreturned.map((bookreturn) => (
                            <tr>
                                <td>{bookreturn.id}</td>
                                <td>{bookreturn.returnedDate}</td>
                                <td>{bookreturn.delayedDays}</td>
                                <td>{bookreturn.penalty}</td>
                                <td>{bookreturn.penaltyStatus}</td>

                                <td>
                                    <Link to={`/bookreturn/update/${bookreturn.id}`}>
                                        <input
                                            type="button"
                                            value="Update"
                                            className="btn btn-secondary me-2"
                                        />
                                    </Link>
                                    <input
                                        type="button"
                                        value="Delete"
                                        className="btn btn-outline-danger"
                                        onClick={() => this.handleDelete(bookreturn.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BooksReturn;

