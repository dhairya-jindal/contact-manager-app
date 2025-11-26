import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEl = useRef("");

  const onDelete = (id) => props.getContactId(id);
  const onSearch = (e) => props.searchKeyword(e.target.value);

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>

      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contact"
            value={props.term}
            onChange={(e) => props.searchKeyword(e.target.value)}
          />
          <i className="search icon"></i>
        </div>
      </div>

      <div className="ui celled list">
        {props.contacts.length > 0 ? props.contacts.map((c) =>
          <ContactCard key={c.id} contact={c} clickHander={onDelete} />
        ) : "No Contacts Available"}
      </div>
      <div className="center-div" style={{ marginTop:"15px"}}>
        <Link to ="/add">
        <button className="ui button blue center">
            ➕ Add More Contacts
          </button>
      </Link>
      </div>
    </div>
  );
};

export default ContactList;
