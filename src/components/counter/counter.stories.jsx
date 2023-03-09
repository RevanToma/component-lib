import Counter from "./counter";
export default {
  title: "Components/Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
