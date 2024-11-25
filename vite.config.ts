import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'react', replacement: path.resolve('./node_modules/react') },
      { find: 'react-dom', replacement: path.resolve('./node_modules/react-dom') }
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
});
