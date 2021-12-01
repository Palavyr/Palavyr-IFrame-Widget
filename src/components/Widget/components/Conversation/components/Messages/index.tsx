import { useEffect, useRef, useState, ElementRef, ImgHTMLAttributes, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import format from 'date-fns/format';

import { scrollToBottom } from '../../../../../../utils/messages';
import { MessageTypes, Link, CustomCompMessage, GlobalState } from '../../../../../../store/types';
import { setBadgeCount, markAllMessagesRead } from '../../../../../../store/actions';
import { MESSAGE_SENDER } from '../../../../../../constants';

import Loader from './components/Loader';
import './styles.scss';

type Props = {
  showTimeStamp: boolean,
  profileAvatar?: string;
  profileClientAvatar?: string;
}

function Messages({ profileAvatar, profileClientAvatar, showTimeStamp }: Props) {
  const dispatch = useDispatch();
  const { messages, typing, showChat, badgeCount } = useSelector((state: GlobalState) => ({
    messages: state.messages.messages,
    badgeCount: state.messages.badgeCount,
    typing: state.behavior.messageLoader,
    showChat: state.behavior.showChat
  }));

  const messageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // @ts-ignore
    scrollToBottom(messageRef.current);
    if (showChat && badgeCount) dispatch(markAllMessagesRead());
    else dispatch(setBadgeCount(messages.filter((message) => message.unread).length));
  }, [messages, badgeCount, showChat]);

  const getComponentToRender = (message: MessageTypes | Link | CustomCompMessage) => {
    const ComponentToRender = message.component;
    if (message.type === 'component') {
      return <ComponentToRender {...message.props} />;
    }
    return <ComponentToRender message={message} showTimeStamp={showTimeStamp} />;
  };

  return (
    <div id="messages" className="rcw-messages-container" ref={messageRef}>
      <iframe style={{height: "100%", width: "100%", border: "0px"}} src="https://staging.widget.palavyr.com/widget?key=cbb41bf2-a8ee-4e77-b0f8-2e493e5ab6a4" ></iframe>
      <Loader typing={typing} />
    </div>
  );
}

export default Messages;
