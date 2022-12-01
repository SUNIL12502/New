// const LandingPage = ()  => {
//     return (
//     <div>
        
//     </div>)
// }

// export default LandingPage;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

// export default function LandingPage() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <CameraIcon sx={{ mr: 3 }} />
//           <Typography variant="h6" color="inherit" noWrap>
//             Stock Portfolio Manager
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>
//         {/* Hero unit */}
//         <Box
//           sx={{
//             bgcolor: 'background.paper',
//             pt: 8,
//             pb: 6,
//           }}
//         >
//           <Container maxWidth="sm">
//             <Typography
//               component="h1"
//               variant="h2"
//               align="center"
//               color="text.primary"
//               gutterBottom
//             >
//               Album layout
//             </Typography>
//             <Typography variant="h5" align="center" color="text.secondary" paragraph>
//               Something short and leading about the collection below—its contents,
//               the creator, etc. Make it short and sweet, but not too short so folks
//               don&apos;t simply skip over it entirely.
//             </Typography>
//             <Stack
//               sx={{ pt: 4 }}
//               direction="row"
//               spacing={2}
//               justifyContent="center"
//             >
//               <Button variant="contained">Main call to action</Button>
//               <Button variant="outlined">Secondary action</Button>
//             </Stack>
//           </Container>
//         </Box>
        
//       </main>
//       {/* Footer */}
//       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </Box>
//       {/* End footer */}
//     </ThemeProvider>
//   );
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { width } from '@mui/system';
// import { useHistory } from "react-router-dom";
// const history = useHistory();
// function loginHandler (){
    

// //   function handleClick() {
//     // history.push("/home");
// }

export default function ButtonAppBar() {

    let navigate = useNavigate();

  async function loginHandler(event) {
    event.preventDefault();
    // await submitForm(event.target);
    navigate("../login");
    // replace: true will replace the current entry in 
    // the history stack instead of adding a new one.

  }

  async function registerHandler(event) {
    event.preventDefault();
    // await submitForm(event.target);
    navigate("../register");
    // replace: true will replace the current entry in 
    // the history stack instead of adding a new one.

  }

  return (
    <Box sx={{width:"100vw", flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Stock Portfolio Mangement
          </Typography>
          {/* <List color="inherit" sx={{ ml: "75vw" }} to="/login">Login</List> */}
          <div>
            <Button color="inherit" sx={{ ml: "75vw" }} onClick={loginHandler}>Login</Button>
            <Button color="inherit" onClick={registerHandler}>Signup</Button>
          </div>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}