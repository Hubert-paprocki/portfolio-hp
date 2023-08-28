import React from "react";
import ContactFormsTile from "./ContactFormsTile";
import { FaFacebookF, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";
import classes from "./ContactForms.module.scss";

export interface ContactForm {
  name: string;
  link: string;
  icon: React.ComponentType;
}

const contactForms: ContactForm[] = [
  {
    icon: FaRegEnvelope,
    name: "hubertpaprocki.dev@gmail.com",
    link: "test@example.com",
  },
  {
    icon: FaLinkedinIn,
    name: "linkedin/hubert-paprocki-krk",
    link: "https://www.linkedin.com/in/hubert-paprocki-krk",
  },
  {
    icon: FaFacebookF,
    name: "facebook/hbrt.pa",
    link: "https://www.facebook.com/hbrt.pa/",
  },
];

function ContactFormsList() {
  return (
    <ul className={classes.list}>
      {contactForms.map((formOfContact) => {
        const { name, link, icon } = formOfContact;
        return (
          <ContactFormsTile key={name} name={name} link={link} icon={icon} />
        );
      })}
    </ul>
  );
}

export default ContactFormsList;
