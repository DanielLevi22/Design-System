import { Button, type ButtonProps } from "@design-system/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Button",
  component: Button, 
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps>= {
  args: {
    label: "Primary Button",
    variant: "primary", 
    children: "Enviar"

  },
};


export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
    children: "Enviar"

  },
};
