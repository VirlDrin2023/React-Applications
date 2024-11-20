import React, { useState } from "react";
import axios from "axios";

const AddContact = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/contacts", { name, email, phone })
      .then((res) => onAdd(res.data))
      .catch((err) => console.error(err));

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form className="p-4 bg-gray-100 mb-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Add Contact</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default AddContact;
