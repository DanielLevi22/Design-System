import type { Preview } from "@storybook/react";
import './global.css'; // Arquivo global para aplicar fontes específicas

const preview: Preview = {

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
