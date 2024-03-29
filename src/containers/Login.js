import  React, {useState} from 'react';
import {Route, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import axios from '../api/axios';
import {setLogin} from '../redux/actions/authActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeNavbar from "./HomeNavbar";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        RMS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function Login() {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const authenticated = useSelector((state)=>state);
  const dispatcher = useDispatch();
  const notify = () => toast("Login successfully!!!");
  const navigate = useNavigate();
  const config = {
    headers:{
      headers: {'Origin': 'https://roman-webservice.onrender.com'}
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    
    
    const loginRes  = await axios.post("https://cors-anywhere.herokuapp.com/https://roman-webservice.onrender.com/auth/token", 
                JSON.stringify({username,password},config), 
            {
                headers:{'Content-Type':'application/json'},
                withCredentials:true});
                console.log(JSON.stringify(loginRes.data));
                dispatcher(setLogin(loginRes.data));
                
                console.log(username);
                navigate('/')
  };

  return (
    <React.Fragment>
    <HomeNavbar/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              username="username"
              autoComplete="username"
              autoFocus
              onChange={(e)=> setUsername(e.target.value)}
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
              onChange={(e)=> setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <ToastContainer />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </React.Fragment>
  );
}