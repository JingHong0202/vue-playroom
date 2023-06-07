import { useChannel } from '@storybook/preview-api';
import { styled } from '@storybook/theming';

import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext
} from '@storybook/types';
// import reactElementToJSXString from 'react-element-to-jsx-string'
// import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from './constants';

export const withWrap = (
  storyFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>
) => {
  // if (!context.parameters.playroom?.code) {
    // context.parameters.previewTabs = {
    //   ['storybook/vue-playroom-addon/tab']: {
    //     hidden: true
    //   }
    // };
  // }
  const story = storyFn();
  const emit = useChannel({
    [EVENTS.UPDATE_PROXY]: () => {
      emit(EVENTS.UPDATE,context);
    }
  });
  return story;
};
