import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
  const location = useLocation();
  const { contact } = location.state || {};

  const [form, setForm] = useState({ id: contact?.id, name: contact?.name, email: contact?.email });
  const [redirect, setRedirect] = useState(false);

  const onUpdate = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("All fields are mandatory!");
      return;
    }
    updateContactHandler(form);
    setRedirect(true);
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={onUpdate}>
        <div className="field">
          <label>Name</label>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="field">
          <label>Email</label>
          <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
