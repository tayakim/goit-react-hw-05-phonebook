import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./contactsList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {contacts.map(({ name, number, id }) => (
      <CSSTransition key={id} timeout={250} classNames={styles}>
        <li className={styles.item}>
          {name}: {number}
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default ContactList;
