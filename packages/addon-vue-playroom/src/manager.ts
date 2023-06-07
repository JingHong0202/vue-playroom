import { addons, types, useParameter } from '@storybook/manager-api';
import { ADDON_ID, PARAM_KEY, TAB_ID } from './constants';
import { Tab } from './Tab';
import { AddonPanel, Button, IconButton } from '@storybook/components';
/**
 * Note: if you want to use JSX in this file, rename it to `manager.tsx`
 * and update the entry prop in tsup.config.ts to use "src/manager.tsx",
 */

// Register the addon
addons.register(ADDON_ID, api => {
  // Register the tab
  addons.add(TAB_ID, {
    type: types.TAB,
    title: 'Playroom',
    //👇 Checks the current route for the story
    route: ({ storyId }) => `/playroom/${storyId}`,
    //👇 Shows the Tab UI element in playroom view mode
    match: ({ viewMode }) => {
      const params = useParameter('playroom')
      // console.log(viewMode, )
      // if (viewMode === 'docs') {
      //   addons.setConfig({ showToolbar: false });
      // } else {
      //   addons.setConfig({ showToolbar: true });
      // }
      return viewMode === 'playroom' 
      // && params && (<any>params).code;
    },
    render: Tab,
    paramKey: PARAM_KEY
  });
});
