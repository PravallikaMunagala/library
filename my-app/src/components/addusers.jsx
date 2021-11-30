import React, { useState } from "react";
import { Typography, Button, Grid, Box, TextField, Alert } from "@mui/material";
import axios from "axios";
import Joi from "joi-browser";
const ariaLabel = { "aria-label": "description" };

const AddUsers = (props) => {
    const [users, setUser] = useState({
        firstName: "",
        lastName: "",
        dateofbirth: "",
        email: "",
        password: "",
        contactno: "",
    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        dateofbirth: "",
        email: "",
        password: "",
        contactno: "",
    });
    const [errMsg, setErrMsg] = useState("");
    const schema = {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        dateofbirth: Joi.date().required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        password: Joi.string().min(3).required(),

        contactno: Joi.number().required(),
    };
    const validate = () => {
        const errors = {};
        const result = Joi.validate(users, schema, { abortEarly: false });
        console.log(result);
        if (result.error != null)
            for (let item of result.error.details) {
                errors[item.path[0]] = item.message;
            }
        return Object.keys(errors).length === 0 ? null : errors;
    };
    const handleChange = (event) => {
        console.log("HandleChange");
        const usr = { ...users };
        usr[event.target.name] = event.target.value;
        setUser(usr);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle submit");
        setErrors(validate());
        console.log(errors);
        if (errors) return;
        axios
            .post("http://localhost:8080/lms/addusers", users)
            .then((res) => props.history.push("/users"))
            .catch((err) => {
                console.log(err.res.data.message);
                setErrMsg(err.res.data.message);
            });
    };
    return (
        <div>
            <Typography variant="h3">Users section</Typography>
            <Grid container>
                <Grid item xs={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
                    {errMsg && <Alert severity="error">{errMsg}</Alert>}
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        style={{
                            border: "1px solid blue",
                            padding: "20px",
                            marginTop: "10px",
                        }}
                    >
                        <Box mb={3}>
                            <TextField
                                inputProps={ariaLabel}
                                type="text"
                                variant="outlined"
                                fullWidth
                                label="First 
                      Name"
                                value={users.firstName}
                                name="firstName"
                                onChange={handleChange}
                            />
                            {errors && (
                                <Typography variant="caption">{errors.firstName}</Typography>
                            )}
                        </Box>

                        <Box mb={3}>
                            <TextField
                                inputProps={ariaLabel}
                                type=" text"
                                variant="outlined"
                                fullWidth
                                label="Last Name"
                                value={users.lastName}
                                name="lastName"
                                onChange={handleChange}
                            />
                            {errors && (
                                <Typography variant="caption">{errors.lastName}</Typography>
                            )}
                        </Box>

                        <Box mb={3}>
                            <TextField
                                inputProps={ariaLabel}
                                type="tel"
                                variant="outlined"
                                fullWidth
                                label="Contact Number"
                                value={users.contactno}
                                name="contactno"
                                onChange={handleChange}
                            />
                            {errors && (
                                <Typography variant="caption">{errors.contactno}</Typography>
                            )}
                        </Box>
                        <Box mb={3}>
                            <TextField
                                inputProps={ariaLabel}
                                type="email"
                                variant="outlined"
                                fullWidth
                                label="Email"
                                value={users.email}
                                name="email"
                                onChange={handleChange}
                            />
                            {errors && (
                                <Typography variant="caption">{errors.email}</Typography>
                            )}
                        </Box>

                        <Box mb={3}>
                            <TextField
                                inputProps={ariaLabel}
                                type="password"
                                variant="outlined"
                                fullWidth
                                label="Password"
                                value={users.password}
                                name="password"
                                onChange={handleChange}
                            />
                            {errors && (
                                <Typography variant="caption">{errors.password}</Typography>
                            )}
                        </Box>
                        <Box mb={3}>
                            <TextField
                                inputProps={ariaLabel}
                                type="date"
                                fullWidth
                                label="Date Of Birth"
                                value={users.dateofbirth}
                                name="dateofbirth"
                                onChange={handleChange}
                            />
                            {errors && (
                                <Typography variant="caption">{errors.dateofbirth}</Typography>
                            )}
                        </Box>
                        <Box mt={3}>
                            <Button variant="contained" type="submit" fullWidth>
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddUsers;