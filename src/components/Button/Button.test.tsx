import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "./Button";

test("renders the Button component", () => {
  render(<Button label="Hello world!" />);
});
