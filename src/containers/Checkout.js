import React from 'react';
import { useNavigate } from "react-router-dom";
import { Typography, Paper, TextField, Button, Grid, Container } from '@mui/material';
import HomeNavbar from "./HomeNavbar";

const Checkout = () => {
  const navigate = useNavigate();
  
  //redirects
  const redirect = () => {
    return window.location.href = "https://smart-lipa.web.app/";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        RMS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Payment />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');

  }
  return (
    <React.Fragment>
      <HomeNavbar/>
    <Container maxWidth="sm">
      <Paper style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="City" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Zip Code" fullWidth />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={() => redirect()}>
          Place Order
        </Button>
      </Paper>
    </Container>
    </React.Fragment>
  );
};

export default Checkout;
