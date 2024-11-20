import React from "react";

const ContactCard = ({ contact, onDelete }) => (
  <div className="bg-white p-4 rounded shadow mb-2 flex justify-between items-center">
    <div>
      <h3 className="text-lg font-bold">{contact.name}</h3>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </div>
    <button
      className="bg-red-500 text-white px-3 py-1 rounded"
      onClick={() => onDelete(contact.id)}
    >
      Delete
    </button>
  </div>
);

export default ContactCard;
