import React from "react";
import { Link } from 'react-router-dom';
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={{pathname: `/contact/${id}`, state:{contact: props.contact}}}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "-20px", marginLeft: "10px", position: 'absolute', right: '23.5%'}}
          onClick={() => props.clickHandler(id)}
        ></i>
        <Link to={{ pathname: `/edit/${id}`, state: {contact: props.contact}}}>
          <i
            className="edit alternate outline icon"
            style={{marginTop: "-20px" ,color: "blue", position: 'absolute', right: '22%'}}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;