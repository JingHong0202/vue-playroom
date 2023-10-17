import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'node:fs';
const genStub: Plugin = {
  name: 'gen-stub',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'ssr-stub.js',
      source: `module.exports = {}`
    });

    this.emitFile({
      type: 'asset',
      fileName: 'pdf.js',
      source: fs.readFileSync('./pdf.js', { encoding: 'utf8' })
    });
  }
};

export default defineConfig({
  plugins: [vue(), genStub],
  base: './',
  build: {
    minify: true,
    target: 'esnext',
    outDir: 'playroom',
    rollupOptions: {
      external: ['typescript']
      // output: {
      //   minifyInternalExports: true,
      //   compact: true,
      //   manualChunks(id) {
      //     if (id.includes('node_modules')) {
      //       const parse = id
      //         .toString()
      //         .split('/')
      //       return parse[parse.length - 2]
      //     } else {
      //       retrun 'vendor'
      //     }
      //   }
      // }
    }
  }
});
