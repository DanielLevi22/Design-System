import type { Preview } from "@storybook/react";
import './global.css'; // Arquivo global para aplicar fontes específicas
import { themes } from '@storybook/theming'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
  
};

export default preview;
