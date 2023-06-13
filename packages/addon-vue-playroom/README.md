# Storybook Addon vue-playroom

## Usage

> ### 1.install

```console
npm install --save-dev storybook-addon-vue-playroom
```

```js
// .storybook/main.js
export default {
  addons: ['storybook-addon-vue-playroom']
};
```

> ### 2.configuration

```ts
// *.stories or global preview

interface Playroom {
  code: string; // 'you code';
  url: string; // 'playroom url';
  delay?: 1000; // init delay, default: 1000;
  mode?: 'dark' | 'light';
}

parameters: {
  playroom: Playroom;
}
```

> ### 3.compile vue-playroom && set playroom url

- #### clone [vue-playroom](https://github.com/JingHong0202/vue-playroom/tree/dev/packages/repl) to local

- #### set [importMap](https://github.com/JingHong0202/vue-playroom/blob/607d2e7ebfdb15c7fc866118f1b50f29039a7570/packages/repl/src/store.ts#L281) and [init files](https://github.com/JingHong0202/vue-playroom/blob/607d2e7ebfdb15c7fc866118f1b50f29039a7570/packages/repl/src/store.ts#LL182C5-L182C5)

- #### complie

  - npm run build | dev

  - default url -> /playroom

> ### tips

- In the prod env, Copy the build file to your storybook build directory

- In the dev env, Browser same-origin policy must be turned off or The storybook must be on the same domain port as Vue-playroom
  > chrome | edge: "xxxx\msedge" --disable-web-security --user-data-dir="xxx"

> ### other

- disable playroom tab:

```ts
parameters: {
  previewTabs: {
    ['storybook/vue-playroom-addon/tab']: {
      hidden: true
    }
  }
}
```
