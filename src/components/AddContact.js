import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [redirect, setRedirect] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("All fields are mandatory!");
      return;
    }
    addContactHandler(form);
    setRedirect(true);
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
