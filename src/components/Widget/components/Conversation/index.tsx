import { useRef, useState, useEffect } from 'react';
import cn from 'classnames';

import Messages from './components/Messages';

import { AnyFunction } from '../../../../utils/types';

import './style.scss';

type Props = {
    title: string;
    subtitle: string;
    senderPlaceHolder: string;
    showCloseButton: boolean;
    disabledInput: boolean;
    autofocus: boolean;
    className: string;
    toggleChat: AnyFunction;
    profileAvatar?: string;
    profileClientAvatar?: string;
    titleAvatar?: string;
    onQuickButtonClicked?: AnyFunction;
    onTextInputChange?: (event: any) => void;
    sendButtonAlt: string;
    showTimeStamp: boolean;
    resizable?: boolean;
    emojis?: boolean;
};

function Conversation({
    className,
    profileAvatar,
    profileClientAvatar,

    showTimeStamp,
    resizable,
}: Props) {
    const [containerDiv, setContainerDiv] = useState<HTMLElement | null>();
    let startX, startWidth;

    useEffect(() => {
        const containerDiv = document.getElementById('rcw-conversation-container');
        setContainerDiv(containerDiv);
    }, []);

    const initResize = (e) => {
        if (resizable) {
            startX = e.clientX;
            if (document.defaultView && containerDiv) {
                startWidth = parseInt(document.defaultView.getComputedStyle(containerDiv).width);
                window.addEventListener('mousemove', resize, false);
                window.addEventListener('mouseup', stopResize, false);
            }
        }
    };

    const resize = (e) => {
        if (containerDiv) {
            containerDiv.style.width = startWidth - e.clientX + startX + 'px';
        }
    };

    const stopResize = (e) => {
        window.removeEventListener('mousemove', resize, false);
        window.removeEventListener('mouseup', stopResize, false);
    };

    return (
        <div
            id="rcw-conversation-container"
            onMouseDown={initResize}
            className={cn('rcw-conversation-container', className)}
            aria-live="polite"
        >
            {resizable && <div className="rcw-conversation-resizer" />}

            <Messages
                profileAvatar={profileAvatar}
                profileClientAvatar={profileClientAvatar}
                showTimeStamp={showTimeStamp}
            />
        </div>
    );
}

export default Conversation;
