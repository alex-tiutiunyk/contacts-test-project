import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const CreateContact = () => {
  const token = 'VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn';
  const url = `https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/contact?access_token=${token}`;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFistName = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastName = (event) => {
    setLastName(event.target.value);
  }
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = async () => {
    const response = await axios.post(url, {
      record_type: "person",
      privacy: {
        edit: null,
        read: null,
      },
      owner_id: null,
      "fields": {
        "email": [
          {
            "value": email,
          }
        ],
        "first name": [
          {
            "value": firstName,
          }
        ],
        "last name": [
          {
            "value": lastName,
          }
        ]
      }
    })
    console.log(response)
  }

  return (
    <>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input placeholder="" value={firstName} onChange={(event) => handleFistName(event)}/>
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input placeholder="" value={lastName} onChange={(event) => handleLastName(event)}/>
      </FormControl>
      <FormControl error1>
        <FormLabel>Email</FormLabel>
        <Input placeholder="" value={email} onChange={(event) => handleEmail(event)}/>
        <FormHelperText>
          Opps! something is wrong.
        </FormHelperText>
      </FormControl>
      <Box component="footer">
        <Button onClick={handleSubmit}>Button</Button>
      </Box>
    </>
  )
}

export default CreateContact
