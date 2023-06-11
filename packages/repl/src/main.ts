import { createApp, h, onUnmounted, ref, watchEffect } from 'vue';
import { Repl, ReplStore } from '.';
(window as any).process = { env: {} };

const App = {
  setup() {
    const query = new URLSearchParams(location.search);
    const store = new ReplStore({
      serializedState: location.hash.slice(1),
      showOutput: query.has('so'),
      outputMode: query.get('om') || 'preview',
      defaultVueRuntimeURL: import.meta.env.PROD
        ? undefined
        : `${location.origin}/src/vue-dev-proxy`,
      defaultVueServerRendererURL: import.meta.env.PROD
        ? undefined
        : `${location.origin}/src/vue-server-renderer-dev-proxy`
    });
    function handerMessage({ data }: MessageEvent) {
      if (data.type === 'update') {
        // console.log(data)
        setTimeout(() => {
          data.code && (store.state.activeFile.code = data.code);
          document.documentElement.className =
            data.mode ||
            parent.document.documentElement.getAttribute('data-su-theme') ||
            'dark';
          parent.postMessage({ type: 'updated' }, '*');
        }, data.delay || 1000);
      } else if (data.type === 'changeTheme') {
        document.documentElement.className = data.mode || 'dark';
      }
    }
    window.addEventListener('message', handerMessage);
    onUnmounted(() => {
      window.removeEventListener('message', handerMessage);
    });
    watchEffect(() => history.replaceState({}, '', store.serialize()));

    // setTimeout(() => {
    // store.setFiles(
    //   {
    //     'index.html': '<h1>yo</h1>',
    //     'main.js': 'document.body.innerHTML = "<h1>hello</h1>"',
    //     'foo.js': 'document.body.innerHTML = "<h1>hello</h1>"',
    //     'bar.js': 'document.body.innerHTML = "<h1>hello</h1>"',
    //     'baz.js': 'document.body.innerHTML = "<h1>hello</h1>"'
    //   },
    //   'index.html'
    // )
    // }, 1000);

    // store.setVueVersion('3.2.8')

    return () =>
      h(Repl, {
        store,
        // layout: 'vertical',
        // ssr: true,
        // sfcOptions: {
        //   script: {
        //     inlineTemplate: false
        //   }
        // },
        // showCompileOutput: import.meta.env.DEV,
        // showImportMap: import.meta.env.DEV
      });
  }
};

createApp(App).mount('#app');
