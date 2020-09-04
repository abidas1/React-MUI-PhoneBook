import React, { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Typography from "@material-ui/core/Typography";
import ContactsIcon from "@material-ui/icons/Contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="App">
      <Typography variant="h3">
        <ContactsIcon style={{ fontSize: "2.5rem" }} /> My UT Phone Book
      </Typography>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default App;
