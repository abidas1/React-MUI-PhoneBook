import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = (props) => {
  
  const removeContact = (id) => {
    props.setContacts(props.contacts.filter((contact) => id !== contact.id));
  };

  const favoriteContact = (id) => {
    props.setContacts(
      props.contacts.map((contact) =>
        contact.id === id
          ? { ...contact, favorite: !contact.favorite }
          : contact
      )
    );
  };

  const saveEditContact = (id, newName, newPhoneNumber) => {
    props.setContacts(
      props.contacts.map((contact) =>
        contact.id === id
          ? { ...contact, name: newName, phoneNumber: newPhoneNumber }
          : contact
      )
    );
  }

  const showContactList = (favoriteCheck) => {
    return props.contacts
      .filter((contact) => contact.favorite === favoriteCheck)
      .map((contact, index) => {
        return (
          <ContactListItem
            key={index}
            contact={contact}
            removeContact={removeContact}
            favoriteContact={favoriteContact}
            saveEditContact={saveEditContact}
          />
        );
      });
  };

  const favoriteContacts = showContactList(true);

  const contacts = showContactList(false);

  return (
    <>
      {favoriteContacts}
      {contacts}
    </>
  );
};

export default ContactList;
