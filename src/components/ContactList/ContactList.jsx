import React, { useLayoutEffect } from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

// const {
//   id,
//   name,
//   phone,
//   email,
//   status,
//   hasPhysicalAddress = false,
//   onSayMyName,
//   onDeleteProfile,
// } = props;

const ContactList = (contacts) => {
  return (
    <ul>
      {contacts.contacts.map((profileUsers) => {
        console.log("test. id : " + profileUsers.id);
        return (
          <li className={css.contacts__item} key={profileUsers.id}>
            <Contact
              id={profileUsers.id}
              name={profileUsers.name}
              number={profileUsers.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
