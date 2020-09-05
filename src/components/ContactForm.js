import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  makeStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import MaskedInput from 'react-text-mask'

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
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  TextFieldStyle: {
    minWidth: '35%',
    marginBottom: '.5rem'
  },
  ButtonStyle: {
    minWidth: '8rem',
    // minHeight: '3.5rem',
    marginBottom: '.5rem'
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
          <input
            id='name'
            placeholder='Name'
            value={contactInfo.name}
            autoFocus
            required
            onChange={handleChange}
            className={classes.TextFieldStyle}
          />
          <MaskedInput
            id="phoneNumber"
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            className={classes.TextFieldStyle}
            placeholder="Phone Number"
            guide={false}
            value={contactInfo.phoneNumber}
            onChange={handleChange}
            required
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
