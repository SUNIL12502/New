// const Login = ()  => {
//     return <div><form >
//     <label htmlFor="">Email ID</label>
//     <input type="text" />
//     <label htmlFor="">Password</label>
//     <input type="text" />
//     <button>Sign in</button>
// </form></div>
// }

// export default Login;

import { useState } from "react";
import { useLogin } from '../../hooks/useLogin.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate, Navigate } from "react-router-dom";

const theme = createTheme();

const Login = ()  => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();
    let navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        // console.log(error)

        const isLoggedIn= await login(email,password)
       
    //     {if({!error}){
    //         navigate("../home")
    // }}
    isLoggedIn?navigate('../home'):navigate('../login')
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    // fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value = {email}
                    onChange={(e) =>{setEmail(e.target.value)}}
                    autoComplete="email"
                    // ref={emailRef}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    // fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    onChange={(e) =>{setPassword(e.target.value)}}
                    id="password"
                    value = {password}
                    // ref={passwordRef}
                    autoComplete="current-password"
                />
                {/* <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password-confirm"
                    label="Confirm Password"
                    type="password"
                    id="password-confirm"
                    // ref={passwordConfirmRef}
                    autoComplete="current-password"
                /> */}
                
                <Button
                    type="submit"
                    disabled={isLoading}
                    // fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Log In
                </Button>
                {error && <><div className="error">{error}</div><Navigate to="/login" replace={true} /></>}
                {/* {!error && <Navigate to="/home" replace={true}/>} */}
                {/* {login && (<Navigate to="/login" replace={true} />)} */}
            </Box>
            {/* <form className="login" onSubmit={handleSubmit}>
                <h3>Log In</h3>

                <label>Email:</label>
                <input 
                    type="email"
                    onChange={(e) =>{setEmail(e.target.value)}}
                    value = {email}
                />

                <label>Password:</label>
                <input 
                    type="password"
                    onChange={(e) =>{setPassword(e.target.value)}}
                    value = {password}
                />

                <button disabled={isLoading}>Log in</button>
                {error && <div className="error">{error}</div>}
            </form> */}
        </ThemeProvider>
    )
}

export default Login;