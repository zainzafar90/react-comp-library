import React from "react";
import TextInput from "ps-react/TextInput";

export default function ExampleOptional() {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      required={true}
      error="First name is required"
    />
  );
}
