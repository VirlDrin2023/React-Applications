import React, { useState } from "react";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAdd = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <AddContact onAdd={handleAdd} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
