import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/contacts/${id}`)
      .then(() => setContacts(contacts.filter((contact) => contact.id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contact List</h2>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
