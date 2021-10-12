//import logo from './images/journalLogo.png';
import * as React from 'react';
// import {useHistory} from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';
// import style from '../index.css';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';
// import { Grid, TextField, Button, Paper, Card, CardContent } from '@material-ui/core';
// import CardHeader from '@mui/material/CardHeader';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
// Still updating this component and the others!

// const useStyles = makeStyles(theme => ({
//   root: {
//     height: '100vh',
//   },
//   image:{
//     backgroundImage:'',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   paper: {
//     margin: theme.spacing(4),
//     flexDirection: 'column',
//     display: 'flex'
//   },
//   form: {
//     width: '100%',
//     marginTop: auto
//   }
// }))


function Copyright(props) {
  

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        Team Toe Shoes
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

function test(props) {

  function SignInSide() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={SignInSide} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    CREATE AN ACCOUNT
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
  }
  //conditionally render this component based on user selection?
  // function Registration(props) {

  //   const [password, setUserPassword] = useState('');
  //   const [fullname, setfirstName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [mobile, setMobile] = useState('');
  
  //   const submitFunc = (e) => {
  //     e.preventDefault();
  //     console.log('name and pass ', firstName, lastName, mobile, password)
  //     fetch('/users/login', {
  //         method: 'POST',
  //         mode: 'cors',
  //         headers: {
  //             "Content-type": "application/json"
  //         },
  //         body: JSON.stringify(
  //             {
  //             fullname,
  //             email,
  //             password
  //             })
  //     })
  //     .then(response => response.json())
  //     .then( data => console.log(data))
  //     .catch(() => console.log('fetch error has occurred'))
  // }
  //     return (
  //       <div>
  //         <h1> <a href='http://localhost:8080/Login'> <img src={logo} alt='Travel Planner logo'/> </a> </h1>
  //         <div className="document"> 
  //           <form action="" method="post">
  //             <div>
  //               <h2>Travel Planner Registration</h2>
  //               <p>
  //                 <label for="name"></label>
  //                 <input type="text" value={fullname} onChange={e => setfirstName(e.target.value)} placeholder="First Name"></input><br/>
  //               </p>
  //                 <label for="email"></label>
  //                 <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"></input>
  //               <p>
  //                 <label for="password"> </label>
  //                 <input type="password" required password={password} onChange={e => setUserPassword(e.target.value)} placeholder="Password"></input><br/>
  //               </p>
  //               <p>
  //                 <label for="mobile"> </label>
  //                 <input type="phone" required mobile={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile"></input><br/>
  //               </p>
  //               <button className="SubmitButton" onClick={submitFunc}>Submit</button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
      
  //     )
  //   }
  export default test;