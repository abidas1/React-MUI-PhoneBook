import React from "react";
import ContactListItem from "./ContactListItem";

const ContactList = (props) => {
  const removeContact = (id) => {
    props.setContacts(props.contacts.filter((contact) => id !== contact.id));
  };

  const contacts = props.contacts.map((contact, index) => {
    return (
        <ContactListItem key={index} contact={contact} removeContact={removeContact} />
    );
  });
  return <> {contacts}</>;
};

export default ContactList;
