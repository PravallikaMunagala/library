import axios from "axios";
import React, { Component } from "react";
class Addbookissued extends React.Component {
    state = {
        bookissued: {
            issueDate: "",
            dueDate: "",
            bookid: "",
            userid: "",
        },
    };

    handleChange = (event) => {
        const issued = { ...this.state.bookissued };
        issued[event.target.name] = event.target.value;
        this.setState({ bookissued: issued });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const issue = {
            issueDate: this.state.bookissued.issueDate,
            dueDate: this.state.bookissued.dueDate,
            Books: {
                bookid: this.state.bookissued.bookid,
            },
            Users: {
                userid: this.state.bookissued.userid,
            },
            issueId: 0,
        };
        axios
            .post("http://localhost:8080/lms/add", this.state.bookissued)
            .then((res) => {
                this.props.history.push("/bookissued");
            })
            .catch((err) => console.log(err));
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">
                            issueDate
                        </label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="exampleissueDate"
                            value={this.state.bookissued.issueDate}
                            name="issueDate"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">
                            dueDate
                        </label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="exampledueDate"
                            value={this.state.bookissued.dueDate}
                            name="dueDate"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">
                            bookid
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampledueDate"
                            value={this.state.bookissued.bookid}
                            name="bookid"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">
                            userid
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampledueDate"
                            value={this.state.bookissued.userid}
                            name="userid"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Addbookissued;