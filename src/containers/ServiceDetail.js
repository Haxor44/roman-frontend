import React from 'react';
import { useNavigate } from "react-router-dom";
import { Typography, Paper, Button, Grid, Container } from '@mui/material';
import mechanic from "../images/mechanic.jpg";
import HomeNavbar from "./HomeNavbar";
const ServiceDetail = () => {
	const navigate = useNavigate();
  return (
	<React.Fragment>
	<HomeNavbar/>
    <Container maxWidth="sm">
      <Paper style={{ padding: 20, marginTop: 50 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Mechanic
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={mechanic}  style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Price: $4
            </Typography>
            <Typography variant="body1">Testing!!!</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={()=> navigate("/checkout")}>
              Proceed To checkout
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
	</React.Fragment>
  );
};

export default ServiceDetail;
