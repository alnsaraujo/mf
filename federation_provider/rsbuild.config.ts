import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [pluginReact(),
  pluginModuleFederation(
    {
      name: 'federation_provider',
      exposes: {
        './button': './src/button.tsx',
        './store': './src/store.tsx',
      },
      shared: ['react', 'react-dom', 'zustand'],
    }
  )],
  server: {
    port: 3000,
  }
});
