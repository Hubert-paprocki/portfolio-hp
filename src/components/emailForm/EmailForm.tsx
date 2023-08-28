import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "../ui/buttons/Buttons";
import classes from "./EmailForm.module.scss";

interface FormValues {
  shortProjectDescription: string;
  techStack: string;
  companyName: string;
  contactEmail: string;
}

function EmailForm() {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.techStack) {
      errors.techStack = "Required";
    }

    if (!values.companyName) {
      errors.companyName = "Required";
    }

    if (!values.contactEmail) {
      errors.contactEmail = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contactEmail)
    ) {
      errors.contactEmail = "Invalid email address";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        shortProjectDescription: "",
        techStack: "",
        companyName: "",
        contactEmail: "",
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form>
        <fieldset className={classes.emailForm}>
          <legend className={classes.legend}>Send me a message</legend>
          <div className={classes.fieldsWrapper}>
            <div className={`${classes.formField} ${classes.right}`}>
              {" "}
              <label
                className={classes.label}
                htmlFor="shortProjectDescription"
              >
                Describe your project
              </label>
              <Field
                className={classes.field}
                as="textarea"
                id="shortProjectDescription"
                name="shortProjectDescription"
                placeholder="Project link or short description"
              />{" "}
              <ErrorMessage
                name="shortProjectDescription"
                component="div"
                className={classes.error}
              />
            </div>

            <div className={classes.left}>
              <div className={classes.fieldGroup}>
                <Field
                  className={classes.field}
                  type="text"
                  id="techStack"
                  name="techStack"
                  placeholder="React, Redux"
                />
                <label className={classes.label} htmlFor="techStack">
                  Tech Stack
                </label>
                <ErrorMessage
                  name="techStack"
                  component="div"
                  className={classes.error}
                />
              </div>

              <div className={classes.fieldGroup}>
                {" "}
                <Field
                  className={classes.field}
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Your company name"
                />
                <label className={classes.label} htmlFor="companyName">
                  Company Name
                </label>
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className={classes.error}
                />
              </div>

              <div className={classes.fieldGroup}>
                {" "}
                <Field
                  className={classes.field}
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  placeholder="Email to which I can send a response"
                />
                <label className={classes.label} htmlFor="contactEmail">
                  Contact Email
                </label>
                <ErrorMessage
                  name="contactEmail"
                  component="div"
                  className={classes.error}
                />
              </div>
            </div>
          </div>

          <Button type="submit" formBtn>
            Send
          </Button>
        </fieldset>
      </Form>
    </Formik>
  );
}

export default EmailForm;
