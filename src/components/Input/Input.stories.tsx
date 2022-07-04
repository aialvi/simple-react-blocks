import React from "react";
import { Story, Meta } from "@storybook/react";
import Input from "./Input";
import { InputProps } from "./Input.types";

export default {
  title: "SRB/Input",
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  disabled: false,
  label: "Primary",
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: "Success",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  message: "Error",
};
