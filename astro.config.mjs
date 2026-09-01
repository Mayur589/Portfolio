import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://mayur589.github.io',
  base: '/Portfolio/',
  build: {
    format: 'directory'
  }
});
