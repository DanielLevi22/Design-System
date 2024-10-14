import { Text, TextProps } from "@design-system/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Box",
  component: Text, 
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat saepe similique laborum quia iusto voluptatem nihil nemo, ab animi fugit consectetur, deleniti consequuntur aut, eum quidem vel autem maxime non.'
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps>= {};

export const CustomTag: StoryObj<TextProps>= {
  args: {
    as: 'strong'
  }
};


