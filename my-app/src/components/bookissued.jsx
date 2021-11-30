import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Bookissued extends React.Component {
    state = {
        booksissued: [],
    };
    componentDidMount() {
        axios
            .get("http://localhost:8080/lms/view")
            .then((res) => {
                console.log(res);
                this.setState({ booksissued: res.data });
            })
            .catch((err) => console.log(err));
    }
    handleDelete = (Id) => {
        axios.delete(`http://localhost:8080/lms/delete/${Id}`).then((res) => {
            const booksissue = this.state.booksissued.filter((d) => d.issueId != Id);
            this.setState({ booksissued: booksissue });
        });
    };
    render() {
        return (
            <div className="container">
                <Link to="/booksissued/add" className="btn btn-primary float-end my-3">
                    Add
                </Link>
                <table className="table table-dark table-striped ">
                    <thead>
                        <tr>
                            <th>issueId</th>
                            <th>issueDate</th>
                            <th>dueDate</th>

                            <th colSpan="3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.booksissued.map((bookissued) => (
                            <tr key={bookissued.issueId}>
                                <td>{bookissued.issueId}</td>
                                <td>{bookissued.issueDate}</td>
                                <td>{bookissued.dueDate}</td>
                                {/* <td>{bookissued.bookid}</td>
                <td>{bookissued.userid}</td> */}
                                <td>
                                    <Link to={`/booksissued/update/${bookissued.issueId}`}>
                                        <input
                                            type="button"
                                            value="Update"
                                            className="btn btn-primary me-2"
                                        />
                                    </Link>

                                    <input
                                        type="button"
                                        value="Delete"
                                        className="btn btn-danger"
                                        onClick={() => this.handleDelete(bookissued.issueId)}
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

export default Bookissued;