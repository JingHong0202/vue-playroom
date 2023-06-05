import { useChannel, useAddonState } from "@storybook/manager-api";
import { styled } from "@storybook/theming";
import { StoryContext } from "@storybook/types";
import React, { FC, useState } from "react";
import { EVENTS, PARAM_KEY } from "./constants";
interface TabProps {
  active: boolean;
}

const Message = styled.p({
  textAlign: "center",
});

const Iframe = styled.iframe({
  border: "0 none",
  height: "100%",
  width: "100%",
});

export const Tab: FC<TabProps> = ({ active }) => {
  // const [url, setUrl] = useState("");
  const emit = useChannel({
    [EVENTS.UPDATE]: (story, context: StoryContext) => {
      const iframe: HTMLIFrameElement = document.querySelector(
        "iframe[title='vue-playroom']"
      );
      iframe.contentWindow.postMessage(
        { type: "update", ...context.parameters.playroom },
        "*"
      );
    },
  });
  if (!active) {
    return null;
  }

  // if (!url) {
  //   return <Message>Playroom has been disabled for this story.</Message>
  // }

  return (
    <Iframe
      onLoad={() => emit(EVENTS.UPDATE_PROXY)}
      allowFullScreen
      src="http://localhost:5173/"
      title="vue-playroom"
    />
  );
};
