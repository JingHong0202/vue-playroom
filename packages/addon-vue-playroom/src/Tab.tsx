import { useParameter } from '@storybook/manager-api';
import { styled, keyframes } from '@storybook/theming';
// import { StoryContext } from '@storybook/types';
import React, { FC, useState } from 'react';
import { PARAM_KEY } from './constants';
interface TabProps {
  active: boolean;
}

const Message = styled.p({
  textAlign: 'center'
});
const Iframe = styled.iframe({
  border: '0 none',
  height: '100%',
  width: '100%'
});
function Loading() {
  const animation = keyframes`
from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}
to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}`;
  const Loading = styled.div({
    borderRadius: '50%',
    cursor: 'progress',
    display: 'inline-block',
    overflow: 'hidden',
    position: 'absolute',
    WebkitTransition: 'all 200ms ease-out',
    transition: 'all 200ms ease-out',
    verticalAlign: 'top',
    top: '50%',
    left: '50%',
    marginTop: '-16px',
    marginLeft: '-16px',
    height: '32px',
    width: '32px',
    zIndex: 4,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(97, 97, 97, 0.29)',
    borderTopColor: 'rgb(100, 100, 100)',
    WebkitAnimation: `${animation} 0.7s linear infinite`,
    animation: `${animation} 0.7s linear infinite`,
    mixBlendMode: 'difference'
  });
  return <Loading />;
}

const update_cb = (playroom: any) => {
  const iframe: HTMLIFrameElement = document.querySelector(
    "iframe[title='vue-playroom']"
  );
  iframe.contentWindow.postMessage({ type: 'update', ...playroom }, '*');
};

let handlerMessage: (data: any) => void;

export const Tab: FC<TabProps> = ({ active }) => {
  if (!active) {
    return null;
  }
  const playroom: any = useParameter('playroom');
  const [outMode, setOutMode] = useState(0);

  if (playroom?.code == undefined) {
    return <Message>The story has no code parameter set</Message>;
  }
  if (playroom?.iframe_others == undefined) {
    playroom.iframe_others = {}
  }
  window.removeEventListener('message', handlerMessage);
  handlerMessage = ({ data }: MessageEvent) => {
    if (data.type === 'updated') {
      setOutMode(1);
    }
  };
  window.addEventListener('message', handlerMessage);

  return (
    <>
      {outMode === 0 && <Loading />}
      <Iframe
        onLoad={() => update_cb(playroom)}
        allowFullScreen
        style={{ visibility: outMode === 1 ? 'unset' : 'hidden' }}
        src={playroom.url || '/playroom'}
        allow={playroom.iframe_allow || ''}
        {...playroom.iframe_others}
        title="vue-playroom"
        key={PARAM_KEY}
      />
    </>
  );
};
