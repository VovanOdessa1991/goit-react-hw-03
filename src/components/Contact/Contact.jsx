import React from "react";
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  console.log("ndwidd" + id);
  // const { id, name, number } = profileUsers;

  return (
    <div className={css.contact}>
      <ul className={css.contactList}>
        <li className={css.contactList__item}>🧑‍🦲{name}</li>
        <li className={css.contactList__item}>📞{number}</li>
      </ul>
      <button className={css.deleateButton}>Delete</button>
    </div>
  );
};

export default Contact;
