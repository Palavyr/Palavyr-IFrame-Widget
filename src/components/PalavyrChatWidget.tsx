import { WidgetLayout } from './WidgetLayout';
import { HtmlIframeProps, OptionalSrcProps } from './IFrameWindow';
import { useEffect, useState } from 'react';
import { WidgetContext } from '../context/widgetContext';
import { AnyFunction, AltContent } from '../types';
import React from 'react';

export interface PalavyrChatWidgetProps extends OptionalSrcProps {
    customLauncher?: AnyFunction;
    onToggle?: AnyFunction;
    launcherOpenLabel?: string;
    launcherCloseLabel?: string;
    launcherCloseImg?: string;
    launcherOpenImg?: string;
    resizable?: boolean;
    startOpen?: boolean;
    alternateContent?: AltContent;
    fixedPosition?: boolean;
    open?: boolean;
    alignLeft?: boolean;
    closeComponent?: React.ReactNode;
    openComponent?: React.ReactNode;
    persistState?: boolean;
    containerStyles?: React.CSSProperties;
    customSpinner?: React.ReactNode | null;
    IframeProps?: HtmlIframeProps;
    autoOpen?: number;
    autoOpenCallback?: () => void;
}

export const PalavyrChatWidget = ({
    src,
    customLauncher,
    onToggle,
    open,
    closeComponent,
    openComponent,
    alternateContent,
    autoOpen,
    autoOpenCallback,
    launcherOpenLabel = 'Open chat',
    launcherCloseLabel = 'Close chat',
    launcherCloseImg = '',
    launcherOpenImg = '',
    resizable = true,
    startOpen = false,
    fixedPosition = true,
    alignLeft = false,
    persistState = true,
    containerStyles = {},
    customSpinner = null,
    IframeProps = {},
}: PalavyrChatWidgetProps) => {
    const [widgetOpenState, setWidgetOpenState] = useState(false);
    const [visible, _] = useState(undefined);

    useEffect(() => {
        open = startOpen;

        if (!fixedPosition) {
            open = true;
        }

        setWidgetOpenState(open);
    }, [startOpen]);

    useEffect(() => {
        if (open && !widgetOpenState) {
            setWidgetOpenState(true);
        } else {
            setWidgetOpenState(false);
        }
    }, [open]);

    const toggleConversation = () => {
        setWidgetOpenState(!widgetOpenState);

        /* eslint-disable-next-line */
        onToggle !== undefined ? onToggle(widgetOpenState) : null;
    };

    if (fixedPosition) {
        resizable = false;
    }

    return (
        <WidgetContext.Provider value={{ widgetOpenState, visible, toggleConversation, persistState }}>
            <WidgetLayout
                src={src}
                alternateContent={alternateContent}
                onToggleConversation={toggleConversation}
                customLauncher={customLauncher}
                launcherOpenLabel={launcherOpenLabel}
                launcherCloseLabel={launcherCloseLabel}
                launcherCloseImg={launcherCloseImg}
                launcherOpenImg={launcherOpenImg}
                closeComponent={closeComponent}
                openComponent={openComponent}
                resizable={resizable}
                fixedPosition={fixedPosition}
                alignLeft={alignLeft}
                containerStyles={containerStyles}
                customSpinner={customSpinner}
                IframeProps={IframeProps}
                autoOpen={autoOpen}
                autoOpenCallback={autoOpenCallback}
            />
        </WidgetContext.Provider>
    );
};
