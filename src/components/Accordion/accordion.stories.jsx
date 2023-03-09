import Accordion from "./accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Faqs = Template.bind({});

Faqs.args = {
  data: [
    {
      title: "What is Lorem Ipsum?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nulla assumenda commodi repellat atque molestiae, possimus unde ea sapiente eum minus libero eligendi reiciendis. Quia possimus voluptas est cum voluptates?",
    },
    {
      title: "Why do you need it?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nulla assumenda commodi repellat atque molestiae, possimus unde ea sapiente eum minus libero eligendi reiciendis. Quia possimus voluptas est cum voluptates?",
    },
  ],
};
