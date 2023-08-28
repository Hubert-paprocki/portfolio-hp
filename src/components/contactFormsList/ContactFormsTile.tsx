import React from "react";
import { ContactForm } from "./ContactFormsList";
import classes from "./ContactForms.module.scss";

function ContactFormsTile(props: ContactForm) {
  const { name, link, icon: Icon } = props;
  return (
    <section>
      <a href={link} className={classes.tile}>
        <span className={classes.text}> {name}</span>
        <Icon />
      </a>
    </section>
  );
}

export default ContactFormsTile;
