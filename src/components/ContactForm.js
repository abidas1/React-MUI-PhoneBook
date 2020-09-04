import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
  CardStyle: {
    marginTop: '1.25rem',
    marginBottom: '1.25rem',
    border: '2px solid black',
  },
  CardHeaderStyle: {
    backgroundColor: 'lightGrey',
    borderBottom: '2px solid black',
  },
  FormStyle: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  ButtonStyle: {
    minWidth: '8rem',
    minHeight: '3.5rem'
  }
});

const ContactForm = (props) => {
  const { contacts, setContacts } = props;
  const [contactInfo, setContactInfo] = useState({
    id: uuidv4(),
    name: '',
    phoneNumber: '',
  });
  const classes = useStyles();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contacts.push(contactInfo);
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    setContacts([...contacts]);
    setContactInfo({ id: uuidv4(), name: '', phoneNumber: '' });
  };

  return (
    <Card variant='outlined' className={classes.CardStyle}>
      <CardHeader title='Add New Contact' className={classes.CardHeaderStyle}/>
      <CardContent>
        <form onSubmit={handleSubmit} className={classes.FormStyle}>
          <TextField
            id='name'
            label='Name'
            variant='outlined'
            value={contactInfo.name}
            focused
            required
            onChange={handleChange}
          />
          <TextField
            id='phoneNumber'
            label='Phone Number'
            variant='outlined'
            value={contactInfo.phoneNumber}
            required
            onChange={handleChange}
          />
          <Button
            variant='contained'
            color='primary'
            startIcon={<AddIcon />}
            label='Submit'
            type='submit'
            className={classes.ButtonStyle}
          >
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
