import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from "@design-systens/react";

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/daniellevi22.png',
    alt: 'Daniel Levi',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}