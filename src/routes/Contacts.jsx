import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Avatar, Card, Chip, Container, List, ListItem, Typography} from '@mui/material';
import { ListItemContent, ListItemDecorator } from '@mui/joy';
import CreateContact from '../components/CreateContact';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Contacts = () => {
  const token = 'VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn';
  const sort = 'created:desc';
  const url = `https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/contacts?access_token=${token}&sort=${sort}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url);
        if (!response.status) throw new Error('Something is broken!')
        console.log(response.data.resources)
        setData(response.data.resources);
      } catch(err) {
        console.log(err)
      }
    }
    getData()
  },[])


  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} sx={{order: 1}}>
            <Typography level="h1">Contacts</Typography>
            <List
              aria-labelledby="ellipsis-list-demo"
              sx={{ '--ListItemDecorator-size': '56px' }}
            >
              {data.map(item => (
                <ListItem key={item.id}>
                  <ListItemDecorator>
                    <Avatar
                      alt="Remy Sharp"
                      src={item.avatar_url}
                    />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography level="title-lg">
                      {(item.fields['first name']) ? (item.fields['first name'][0].value + ' ') : ''}
                      {(item.fields['last name']) ? (item.fields['last name'][0].value) : ''}
                    </Typography>
                    <Typography level="body-md ">
                      Email: {(item.fields.email) ? (item.fields.email[0].value) : 'no email'}
                    </Typography>
                    <Typography level="body-md ">
                      Date: {item.created}
                    </Typography>
                    <ul>
                      <li>Tag1</li>
                      <li>Tag2</li>
                    </ul>
                  </ListItemContent>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={4} sx={{order: 0}}>
            <Typography level="h2">Create Contact</Typography>
            <CreateContact />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Contacts
