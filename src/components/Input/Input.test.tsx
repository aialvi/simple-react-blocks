import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Running Test for Input", () => {
  test("Check placeholder in Input", () => {
    render(<Input placeholder="Hello" />);
    expect(screen.getByPlaceholderText("Hello")).toHaveAttribute(
      "placeholder",
      "Hello"
    );
  });

  test("renders the Input component", () => {
    render(<Input placeholder="" />);
    const input = screen.getByPlaceholderText("") as HTMLInputElement;
    userEvent.type(input, "");
    expect(input.value).toBe("");
  });
});
