import Rating from "./rating";

export default {
  title: "Components/Rating",
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const FiveStars = Template.bind({});
FiveStars.args = {
  number: 5,
};
