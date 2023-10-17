export default {
  '@iconify/vue': 'https://unpkg.com/@iconify/vue@4.1.1/dist/iconify.mjs',
  'ol/': 'https://cdn.jsdelivr.net/npm/ol@8.1.0/',
  'ol-ext/': 'https://cdn.jsdelivr.net/npm/ol-ext@4.0.11/',
  pbf: !import.meta.env.DEV ? './pdf.js' : 'http://localhost:5173/pdf.js',
  rbush: 'https://cdn.jsdelivr.net/npm/rbush@3.0.1/index.js',
  quickselect: 'https://cdn.jsdelivr.net/npm/quickselect@2.0.0/index.js'
};
