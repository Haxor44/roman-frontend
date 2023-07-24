import React from 'react';
import { useNavigate } from "react-router-dom";
import { Typography, Paper, TextField, Button, Grid, Container } from '@mui/material';
import HomeNavbar from "./HomeNavbar";

const Checkout = () => {
  const navigate = useNavigate();
  
  //redirects
  const redirect = () => {
    return window.location.href = "https://smart-lipa.web.app/";
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
