import { useState, useEffect } from 'react';
import cn from 'classnames';
import './IFrameContainer-style.scss';
import { IFrameWindow, IFrameWindowProps } from './IFrameWindow';

export interface ConversationProps extends IFrameWindowProps {
    showChat: boolean;
    className: string;
    resizable?: boolean;
    src: string;
}

export const IFrameContainer = ({ className, src, resizable, showChat, ...iframeProps }: ConversationProps) => {
    const [containerDiv, setContainerDiv] = useState<HTMLElement | null>();
    let startX, startWidth;

    useEffect(() => {
        const containerDiv = document.getElementById('pcw-conversation-container');
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
            style={{ visibility: showChat ? 'visible' : 'hidden' }}
            id="pcw-conversation-container"
            onMouseDown={initResize}
            className={cn('pcw-conversation-container', className)}
            aria-live="polite"
        >
            {resizable && <div className="pcw-conversation-resizer" />}
            <IFrameWindow src={src} {...iframeProps} />
        </div>
    );
};
