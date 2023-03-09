import FormInput from "./formInput";

export default {
  title: "Components/FormInput",
  component: FormInput,
  argTypes: {
    type: {
      options: ["text", "password", "email", "date"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <FormInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "fname",
  label: "First Name",
  placeholder: "Enter your name",
};

export const Password = Template.bind({});

Password.args = {
  name: "Password",
  label: "Password",
  type: "Password",
  placeholder: "Enter your password",
};
