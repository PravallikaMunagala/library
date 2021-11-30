import { NavLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Badge,
} from "@mui/material";

import { useSelector } from "react-redux";
import Users from "./users";

const Nav = () => {
    //const classes = useStyles();
    const login = useSelector((state) => state.login);
    console.log(login);
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        style={{
                            padding: "5px",
                        }}
                    >

                        LMS
                    </Typography>
                    <Button color="inherit" component={NavLink} to="/home">
                        Home
                    </Button>
                    {//login.loggedIn && login.role == "admin" && (
                        <Button color="inherit" component={NavLink} to="/author">
                            Authors
                        </Button>
                    }
                    <Button color="inherit" component={NavLink} to="/book">
                        Books
                    </Button>
                    <Button color="inherit" component={NavLink} to="/readers">
                        Readers
                    </Button>
                    {/*   <Button color="inherit" component={NavLink} to="/users">
            Users
          </Button> */}
                    {login.loggedIn && login.role == "admin" && (
                        <Button
                            color="inherit"
                            style={{ marginRight: "auto" }}
                            component={NavLink}
                            to="/users"
                        >
                            Users
                        </Button>
                    )}
                    {login.loggedIn ? (
                        <Button color="inherit" component={NavLink} to="/logout">
                            Logout
                        </Button>
                    ) : (
                        <Button color="inherit" component={NavLink} to="/login">
                            Login
                        </Button>
                    )}
                    {/* <Button color="inherit" component={NavLink} to="/register">
            Register
          </Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;