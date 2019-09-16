import React from "react";
import RegistrationForm from "ps-react/RegistrationForm";

const ExampleRegistrationForm = () => {
  const onSubmit = user => console.log(user);
  return <RegistrationForm onSubmit={onSubmit} />;
};

export default ExampleRegistrationForm;
