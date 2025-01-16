import { defineConfig } from 'vite';
import ViteStaticCopy from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    ViteStaticCopy({
      targets: [
        {
          src: 'assets/images/*',
          dest: 'assets/images'
        }
      ]
    })
  ]
});
