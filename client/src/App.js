import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import moments from './images/moments.png';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="interit">
        <Typography variant="h2" align="center">Moments</Typography>
        <img src={moments} alt="moments" height="60" />
      </AppBar> 

    </Container>
    
  );
}

export default App;