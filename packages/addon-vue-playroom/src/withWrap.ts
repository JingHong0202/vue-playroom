// import { useChannel } from '@storybook/preview-api';
// import { styled } from '@storybook/theming';
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext
} from '@storybook/types';
// import reactElementToJSXString from 'react-element-to-jsx-string'
// import { STORY_CHANGED } from "@storybook/core-events";
// import { EVENTS } from './constants';

export const withWrap = (
  storyFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>
) => {
  return storyFn();
};
