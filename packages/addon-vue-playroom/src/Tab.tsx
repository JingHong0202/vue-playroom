import { useChannel, useAddonState } from '@storybook/manager-api';
import { styled } from '@storybook/theming';
import { StoryContext } from '@storybook/types';
import React, { FC, useState, useRef } from 'react';
import { EVENTS, PARAM_KEY } from './constants';
interface TabProps {
  active: boolean;
}

// const Message = styled.p({
//   textAlign: "center",
// });
const Iframe = styled.iframe({
  border: '0 none',
  height: '100%',
  width: '100%'
});

export const Tab: FC<TabProps> = ({ active }) => {
  if (!active) {
    return null;
  }
  const [show, setShow] = useState(false);
  const emit = useChannel({
    [EVENTS.UPDATE]: (story, context: StoryContext) => {
      const iframe: HTMLIFrameElement = document.querySelector(
        "iframe[title='vue-playroom']"
      );
      iframe.contentWindow.postMessage(
        { type: 'update', ...context.parameters.playroom },
        '*'
      );
    }
  });

  const handlerMessage = ({ data }: MessageEvent) => {
    if (data.type === 'updated') {
      setShow(true);
      window.removeEventListener('message', handlerMessage);
    }
  };
  window.addEventListener('message', handlerMessage);

  return (
    <>
      {!show && (
        <div className="css-ky0vih">
          <div
            aria-label="Content is loading..."
            aria-live="polite"
            role="progressbar"
            id="preview-loader"
            className="css-cfvyep"></div>
        </div>
      )}
      <Iframe
        onLoad={() => [emit(EVENTS.UPDATE_PROXY)]}
        allowFullScreen
        // ref={iframeRef}
        style={{ visibility: show ? 'unset' : 'hidden' }}
        src={
          process.env.NODE_ENV === 'production'
            ? '/playroom'
            : 'http://localhost:5173/'
        }
        title="vue-playroom"
        key={PARAM_KEY}
      />
    </>
  );
};
