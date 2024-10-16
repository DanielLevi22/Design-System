import { BoxProps, Box ,Text} from "@design-systens/react";
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
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps>= {

};


