import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalState } from '../../../../../../store/types';

import Loader from './components/Loader';
import './styles.scss';

type Props = {
    showTimeStamp: boolean;
    profileAvatar?: string;
    profileClientAvatar?: string;
};

function Messages({ profileAvatar, profileClientAvatar, showTimeStamp }: Props) {
    const dispatch = useDispatch();
    const { typing, showChat } = useSelector((state: GlobalState) => ({
        typing: state.behavior.messageLoader,
        showChat: state.behavior.showChat,
    }));

    const messageRef = useRef<HTMLDivElement | null>(null);

    return (
        <div id="messages" className="rcw-messages-container" ref={messageRef}>
            <iframe
                style={{ height: '100%', width: '100%', border: '0px' }}
                src="https://staging.widget.palavyr.com/widget?key=cbb41bf2-a8ee-4e77-b0f8-2e493e5ab6a4"
            ></iframe>
            <Loader typing={typing} />
        </div>
    );
}

export default Messages;
