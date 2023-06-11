import { defineConfig } from 'vite';
import Markdown from 'vite-plugin-react-markdown';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    Markdown(),
    react({
      include: [/\.tsx$/, /\.md$/], // <-- add .md
    }),
  ],
});
