import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Books extends React.Component {
    state = {
        books: [],
    };
    componentDidMount() {
        axios
            .get("http://localhost:8080/lms/viewAllBooks")
            .then((response) => {
                console.log(response);
                this.setState({ books: response.data });
            })
            .catch((error) => console.log(error));
    }
    handleDelete = (id) => {
        axios.delete(`http://localhost:8080/lms/removeBook/${id}`).then((res) => {
            const books = this.state.books.filter((au) => au.bookid != id);
            this.setState({ books: books });
        });
    };
    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-2">
                        <div class="list-group">
                            <a
                                href="#"
                                class="list-group-item list-group-item-action active"
                                aria-current="true"
                            >
                                The current link item
                            </a>
                            <Link
                                to="/bookreturn"
                                class="list-group-item list-group-item-action"
                            >
                                Book Return
                            </Link>
                            <a href="#" class="list-group-item list-group-item-action">
                                A third link item
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                A fourth link item
                            </a>
                            <a class="list-group-item list-group-item-action disabled">
                                A disabled link item
                            </a>
                        </div>
                    </div>
                    <div className="col-md-10">
                        {this.props.login.loggedIn && this.props.login.role == "admin" && (
                            <Link
                                to="/book/add"
                                className="btn btn-secondary btn-large mt-3 float-end"
                            >
                                Add
                            </Link>
                        )}
                        <table className="table table-info table-striped">
                            <thead>
                                <tr>
                                    <th>BookId</th>
                                    <th>Book Title</th>
                                    <th>ISBN Code</th>
                                    <th>Subject</th>
                                    <th>Shelf Details</th>
                                    <th>Published Year</th>
                                    <th>Quantity</th>
                                    <th>Book Cost</th>
                                    {this.props.login.loggedIn &&
                                        this.props.login.role == "admin" && (
                                            <th colSpan="2">Actions</th>
                                        )}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.books.map((book) => (
                                    <tr>
                                        <td>{book.bookid}</td>
                                        <td>{book.title}</td>
                                        <td>{book.isbncode}</td>
                                        <td>{book.subject}</td>
                                        <td>{book.shelfdetails}</td>
                                        <td>{book.publishedyear}</td>
                                        <td>{book.quantity}</td>
                                        <td>{book.bookcost}</td>
                                        {this.props.login.loggedIn &&
                                            this.props.login.role == "admin" && (
                                                <td>
                                                    <Link to={`/book/update/${book.bookid}`}>
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
                                                        onClick={() => this.handleDelete(book.bookid)}
                                                    />
                                                </td>
                                            )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
    return {
        login: state.login,
    };
};

export default connect(mapStateToProps)(Books); // connect component to store

