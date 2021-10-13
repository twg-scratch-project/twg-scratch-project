//import logo from './images/journalLogo.png';
import * as React from 'react';
import {useHistory} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CreateIcon from '@mui/icons-material/Create';


const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '2rem',
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Architects Daughter',
      'cursive',
    ].join(','),
    fontSize: 16,
  },
});

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        Team Toe Shoes
      {new Date().getFullYear()}
    </Typography>
  );
}

function LandingPage(props) {

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
            backgroundImage: 'url(https://media.nationalgeographic.org/assets/photos/000/206/20669.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'green',
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
            <Typography component="h1" variant="h5">
              <h1>Travel Journal <CreateIcon/> </h1>
            </Typography>
            <Box component="form" onSubmit={SignInSide} sx={{ mt: 1 }}>
               <TextField
                margin="normal"
                required
                // fullWidth
                style={{width:"125%"}}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="standard"
              />
              <TextField
                margin="normal"
                required
                // fullWidth
                style={{width:"125%"}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
              /> 
              {/* conditionally render this component based on user selection? */}
               <Button
                type="submit"
                // fullWidth
                color="primary"
                style={{width:"125%"}}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Me In!
              </Button> 
              {/* <Register/> */}
              <Grid container>
                <Grid item xs>
                {/* needs ref here if we want to use string instd button! */}
                  {/* <Link
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  href="#" underline="hover"
                  > 
                    Register
                  </Link> */}
                  <br/>
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
function Register(){
    return (
      <ThemeProvider>
              <TextField
                margin="normal"
                required
                // fullWidth
                style={{width:"125%"}}
                id="FirstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                variant="standard"
              />
              <TextField
                margin="normal"
                required
                // fullWidth
                style={{width:"125%"}}
                id="LastName"
                label="Last Name"
                name="lastname"
                // autoComplete="lastName"
                autoFocus
                variant="standard"
              />
              <TextField
                margin="normal"
                required
                // fullWidth
                style={{width:"125%"}}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="standard"
              />
              <TextField
                margin="normal"
                required
                // fullWidth
                style={{width:"125%"}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
              /> 
               <Button
                type="submit"
                // fullWidth
                color="primary"
                style={{width:"125%"}}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register!
              </Button>  
      </ThemeProvider>

    )

}
  export default LandingPage;