import { useState, useEffect } from 'react';
import './IFrameContainer-style.scss';
import { IFrameWindow, OptionalSrcProps } from './IFrameWindow';
import { AltContent } from 'src/utils/types';
import classNames from 'classnames';

export interface ConversationProps extends OptionalSrcProps {
    widgetOpenState: boolean;
    className: string;
    resizable?: boolean;
    src?: string;
    alternateContent?: AltContent;
}

export const IFrameContainer = ({
    className,
    src,
    alternateContent,
    resizable,
    widgetOpenState,
    ...iframeProps
}: ConversationProps) => {
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

    const style: React.CSSProperties = {
        borderRadius: '10px',
        minWidth: '355px',
        maxWidth: '100vw',
        position: 'relative',
        boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
        visibility: widgetOpenState ? 'visible' : 'hidden',
        ...iframeProps.style,
    };

    return (
        <div style={style} onMouseDown={initResize} className={classNames('pcw-conversation-container', className)}>
            {resizable && <div className="pcw-conversation-resizer" />}
            {alternateContent}
            {alternateContent === undefined && src && <IFrameWindow src={src} {...iframeProps} />}
        </div>
    );
};
