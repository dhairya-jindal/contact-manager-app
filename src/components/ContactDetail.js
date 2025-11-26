import React from "react";
import { useParams, Link } from "react-router-dom";
import user from "./images/user.png";

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === id);

  if (!contact) return <div className="main">Contact Not Found</div>;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
