import { ButtonProps, Box ,Text} from "@design-system/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box, 
  args: {
    children: (
      <>
        <Text>TEstando</Text>
      </>
    )
  }
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps>= {

};


