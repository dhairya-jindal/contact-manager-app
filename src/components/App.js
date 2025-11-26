import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import api from "../api/contacts";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = { id: uuid(), ...contact };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    setContacts(
      contacts.map((c) => (c.id === contact.id ? response.data : c))
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const searchHandler = (term) => {
    setSearchTerm(term);
    if (term !== "") {
      setSearchResults(
        contacts.filter((c) =>
          Object.values(c).join(" ").toLowerCase().includes(term.toLowerCase())
        )
      );
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const all = await retrieveContacts();
      if (all) setContacts(all);
    };
    getAllContacts();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contacts={searchTerm === "" ? contacts : searchResults}
              getContactId={removeContactHandler}
              term={searchTerm}
              searchKeyword={searchHandler}
            />
          }
        />
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler} />} />
        <Route path="/contact/:id" element={<ContactDetail contacts={contacts} />} />
      </Routes>
    </Router>
  );
}

export default App;
