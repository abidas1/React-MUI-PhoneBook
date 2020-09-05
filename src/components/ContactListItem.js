import React, { useState } from 'react';
import { IconButton, Card, makeStyles, Typography } from '@material-ui/core';
import {
  Person,
  Phone,
  StarBorder,
  Star,
  Edit,
  Save,
  Cancel,
  Delete,
} from '@material-ui/icons';
import MaskedInput from 'react-text-mask';

const useStyles = makeStyles({
  CardStyle: {
    marginBottom: '.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  NameDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  PhoneNumberDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  PhoneNumberStyle: {
    minWidth: '7rem',
  },
});

const ContactListItem = (props) => {
  const { contact, removeContact, favoriteContact, saveEditContact } = props;
  const [editFlag, setEditFlag] = useState(false);
  const [editName, setEditName] = useState(contact.name);
  const [editPhoneNumber, setEditPhoneNumber] = useState(contact.phoneNumber);
  const classes = useStyles();

  const handleCancel = () => {
    setEditName(contact.name)
    setEditPhoneNumber(contact.phoneNumber)
    setEditFlag(false)
  }

  return (
    <Card className={classes.CardStyle}>
      <div className={classes.NameDiv}>
        <Person fontSize='large' />{' '}
        {!editFlag ? (
          <Typography variant='h5'>{contact.name}</Typography>
        ) : (
          <input
            id='editName'
            value={editName}
            onChange={e => setEditName(e.target.value)}
          />
        )}
      </div>
      <div className={classes.PhoneNumberDiv}>
        <Phone fontSize='large' />{' '}
        {!editFlag ? (
          <Typography className={classes.PhoneNumberStyle}>
            {contact.phoneNumber}
          </Typography>
        ) : (
          <MaskedInput
            id='editPhoneNumber'
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            guide={false}
            value={editPhoneNumber}
            onChange={e => setEditPhoneNumber(e.target.value)}
          />
        )}
      </div>
      <div>
        {contact.favorite === false ? (
          <IconButton onClick={() => favoriteContact(contact.id)}>
            <StarBorder style={{ color: 'green' }} />
          </IconButton>
        ) : (
          <IconButton onClick={() => favoriteContact(contact.id)}>
            <Star style={{ color: 'green' }} />
          </IconButton>
        )}
        {!editFlag ? (
          <IconButton onClick={() => setEditFlag(true)}>
            <Edit style={{ color: 'gold' }} />
          </IconButton>
        ) : (
          <>
            <IconButton onClick={() => {
              saveEditContact(contact.id, editName, editPhoneNumber)
              setEditFlag(false)
              }}>
              <Save style={{ color: 'blue' }} />
            </IconButton>
            <IconButton onClick={handleCancel}>
              <Cancel />
            </IconButton>
          </>
        )}
        <IconButton onClick={() => removeContact(contact.id)}>
          <Delete style={{ color: 'red' }} />
        </IconButton>
      </div>
    </Card>
  );
};

export default ContactListItem;
