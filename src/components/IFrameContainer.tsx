import { useState, useEffect } from 'react';
import { IFrameWindow, OptionalSrcProps } from './IFrameWindow';
import classNames from 'classnames';
import './styles.scss';
import { AltContent } from '../types';
import React from 'react';

export interface IFrameContainerProps extends OptionalSrcProps {
    widgetOpenState: boolean;
    className: string;
    resizable?: boolean;
    src?: string;
    alternateContent?: AltContent;
    persistState?: boolean;
}

export const IFrameContainer = ({
    className,
    src,
    alternateContent,
    resizable,
    widgetOpenState,
    persistState,
    ...iframeProps
}: IFrameContainerProps) => {
    const [containerDiv, setContainerDiv] = useState<HTMLElement | null>();
    let startX: number;
    let startWidth: number;

    useEffect(() => {
        const cDiv = document.getElementById('pcw-conversation-container');
        setContainerDiv(cDiv);
    }, []);

    const initResize = (e: { clientX: number }) => {
        if (resizable) {
            startX = e.clientX;
            if (document.defaultView && containerDiv) {
                startWidth = parseInt(document.defaultView.getComputedStyle(containerDiv).width, 10);
                window.addEventListener('mousemove', resize, false);
                window.addEventListener('mouseup', stopResize, false);
            }
        }
    };

    const resize = (e: { clientX: number }) => {
        if (containerDiv) {
            containerDiv.style.width = startWidth - e.clientX + startX + 'px';
        }
    };

    const stopResize = (_: any) => {
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
            {(persistState || widgetOpenState) && alternateContent}
            {alternateContent === undefined && src && (persistState || widgetOpenState) && (
                <IFrameWindow src={src} {...iframeProps} />
            )}
        </div>
    );
};
