import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';

const genStub: Plugin = {
  name: 'gen-stub',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'ssr-stub.js',
      source: `module.exports = {}`
    });
  }
};

export default defineConfig({
  plugins: [vue(), genStub],
  base: './',
  build: {
    minify: true,
    outDir: 'playroom'
    // rollupOptions: {
    //   external: ["vue", "vue/compiler-sfc"],
    // },
  }
});
