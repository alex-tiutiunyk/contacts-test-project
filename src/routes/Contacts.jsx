import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CreateContact from '../components/CreateContact';
import { NavLink } from 'react-router-dom';


const Contacts = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} sx={{order: 1}}>
            <h1>Contacts</h1>
            <ul>
              <li><NavLink to={'1'}>Contact 1</NavLink></li>
              <li><NavLink to={'2'}>Contact 2</NavLink></li>
            </ul>
          </Grid>
          <Grid item xs={4} sx={{order: 0}}>
            <h2>Create Contact</h2>
            <CreateContact />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Contacts
