import React, { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { UserContext } from "../components/UserContext";
import { useAuth } from "../components/AuthProvider";


const theme = createTheme();
const port = 5000;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
      
    //  const response = await fetch(`http://localhost:${port}/login`, {
       const response = await fetch(`https://backend-rust-three.vercel.app/login`, {  
    //    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {  
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);         
          console.log(userInfo);
         // console.log(userInfo.Code);
          if (userInfo.Code === 11111) {
            alert("Email does not exist!");
          } else if (userInfo.email === email) {
            setAuth(true)
            navigate("/Admin");
          }
        });
      } else {
        alert("wrong credentials");
    }
  };
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="email"
              sx={{ mb: 3 }}
              fullWidth
              name="email"
              value={email}
              error={emailError}
              helperText="Email is required"
              focused
            />
            <TextField
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="password"
              name="password"
              value={password}
              error={passwordError}
              helperText="Password is required"
              fullWidth
              sx={{ mb: 3 }}
            />
            <Button variant="contained" color="secondary" type="submit">
              Login
            </Button>
          </form>
         <small>
            Need an account?{"   "} &nbsp;
            <Link to="/addusers">Register here</Link>
          </small>
          
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
