import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Typography, makeStyles } from '@material-ui/core';
import ContactsIcon from '@material-ui/icons/Contacts';

const useStyles = makeStyles({
  AppClass: {
    margin: '0.625rem 1.25rem 0.625rem 1.25rem'
  },
  HeaderClass: {
    display: 'flex',
    alignItems: 'center',
  },
  ContactIconClass:{
    fontSize: '2.5rem'
  }
});

const App = () => {
  const [contacts, setContacts] = useState([]);
  const classes = useStyles();

  return (
    <div className={classes.AppClass}>
      <Typography className={classes.HeaderClass} variant='h3'>
        <ContactsIcon className={classes.ContactIconClass}/> My UT Phone Book
      </Typography>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default App;
