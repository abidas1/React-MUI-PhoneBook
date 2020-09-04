import React from 'react';
import { IconButton, Card, makeStyles, Typography } from '@material-ui/core';
import { Person, Phone, Delete } from '@material-ui/icons';

const useStyles = makeStyles({
  CardStyle: {
    marginBottom: '.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CardDiv: {
    display: 'flex',
    alignItems: 'center',
    width: '30%',
  },
});

const ContactListItem = (props) => {
  const { contact, removeContact } = props;
  const classes = useStyles();

  return (
    <Card className={classes.CardStyle}>
      <div className={classes.CardDiv}>
        <Person fontSize='large' /> <Typography variant='h5'>{contact.name}</Typography>
      </div>
      <div className={classes.CardDiv}>
        <Phone fontSize='large'/> <Typography>{contact.phoneNumber}</Typography>
      </div>
      <IconButton onClick={() => removeContact(contact.id)}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default ContactListItem;
