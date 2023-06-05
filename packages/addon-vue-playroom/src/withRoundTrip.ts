import { useChannel } from "@storybook/preview-api";
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from "@storybook/types";
// import reactElementToJSXString from 'react-element-to-jsx-string'
// import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";

export const withRoundTrip = (
  storyFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>
) => {
  const emit = useChannel({
    [EVENTS.UPDATE_PROXY]: () => {
      emit(EVENTS.UPDATE, storyFn(), context);
    }
  });
  return storyFn();
};
