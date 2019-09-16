import React from "react";
import Label from "ps-react/Label";

/** Required Label */
export default function ExampleOptional() {
  return <Label htmlFor="test" label="test" required={true} />;
}
