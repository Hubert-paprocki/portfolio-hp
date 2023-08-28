import React, { useContext } from "react";
import Head from "next/head";
import LanguageContext from "@/context/LangContext";
import classes from "./ContactPage.module.scss";
import EmailForm from "@/components/emailForm/EmailForm";
import ContactFormsList from "../../components/contactFormsList/ContactFormsList";

function ContactPage() {
  const { selectedLanguage } = useContext(LanguageContext);
  const contactPageLang = selectedLanguage.contactPage;

  return (
    <>
      <Head>
        <title>{contactPageLang.pageTitle}</title>
      </Head>
      <main className={classes.main}>
        <article className={classes.container}>
          <section className={classes.left}>
            <h1 className={classes.title}>{contactPageLang.title}</h1>
            <h2>{contactPageLang.contactForms}</h2>
            <ul>{<ContactFormsList />}</ul>
          </section>
          <section className={classes.right}>
            <EmailForm />
          </section>
        </article>
      </main>
    </>
  );
}

export default ContactPage;
