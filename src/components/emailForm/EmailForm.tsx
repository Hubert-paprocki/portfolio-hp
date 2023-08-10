import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikProps } from "formik";
import Button from "../ui/buttons/Buttons";

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

    if (!values.shortProjectDescription) {
      errors.shortProjectDescription = "Required";
    }

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
    <>
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
        {
          <Form>
            <div>
              <label htmlFor="shortProjectDescription">
                Describe your project
              </label>
              <Field
                type="text"
                id="shortProjectDescription"
                name="shortProjectDescription"
                as="textarea"
                placeholder="Project link or short description"
              />
              <ErrorMessage
                name="shortProjectDescription"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label htmlFor="techStack">Project Tech Stack</label>
              <Field
                type="text"
                id="techStack"
                name="techStack"
                placeholder="React,Redux"
              />
              <ErrorMessage
                name="techStack"
                component="div"
                className="error"
                as="textarea"
              />
            </div>

            <div>
              <label htmlFor="companyName">Company Name</label>
              <Field
                type="text"
                id="companyName"
                name="companyName"
                placeholder="your company name"
              />
              <ErrorMessage
                name="companyName"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label htmlFor="contactEmail">Contact Email</label>
              <Field
                type="email"
                id="contactEmail"
                name="contactEmail"
                placeholder="Email to which I can send a response"
              />
              <ErrorMessage
                name="contactEmail"
                component="div"
                className="error"
              />
            </div>

            <Button type="submit">Send</Button>
          </Form>
        }
      </Formik>
    </>
  );
}

export default EmailForm;
