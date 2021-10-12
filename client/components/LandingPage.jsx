//import logo from './images/journalLogo.png';
import * as React from 'react';
import {useHistory} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              <h1>Travel Journal</h1>
            </Typography>
            <Typography component="h1" variant="h4">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={SignInSide} sx={{ mt: 1 }}>
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
              />
              <Button
                type="submit"
                // fullWidth
                color="primary"
                style={{width:"125%"}}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                {/* needs ref here! */}
                  <Link
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color:'navy'
                  }}
                  > 
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
  //         <h1> Registration </h1>
  //         <div > 
  //           <form >
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
  export default LandingPage;