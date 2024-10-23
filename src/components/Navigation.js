import React from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: '2rem' }}>
      <Grid item>
      <Button variant="contained" color="default" component={Link} to="/">
          Home
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/products">
          Products
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary" component={Link} to="/orders">
          Orders
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="success" component={Link} to="/suppliers">
          Suppliers
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="info" component={Link} to="/dashboard">
          Dashboard
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="warning" component={Link} to="/reporting">
          Reporting
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navigation;
