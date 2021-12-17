import { WidgetLayout } from './WidgetLayout';
import { OptionalSrcProps } from './IFrameWindow';
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
    launchComponent?: React.ReactNode;
    persistState?: boolean;
}

export const PalavyrChatWidget = ({
    src,
    customLauncher,
    onToggle,
    open,
    closeComponent,
    launchComponent,
    launcherOpenLabel = 'Open chat',
    launcherCloseLabel = 'Close chat',
    launcherCloseImg = '',
    launcherOpenImg = '',
    resizable = true,
    startOpen = false,
    alternateContent,
    fixedPosition = true,
    alignLeft = false,
    persistState = true,
    ...iframeProps
}: PalavyrChatWidgetProps) => {
    const [widgetOpenState, setWidgetOpenState] = useState(false);
    const [visible, _] = useState(undefined);

    useEffect(() => {
        setWidgetOpenState(startOpen);
    }, []);

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
                {...iframeProps}
                src={src}
                alternateContent={alternateContent}
                onToggleConversation={toggleConversation}
                customLauncher={customLauncher}
                launcherOpenLabel={launcherOpenLabel}
                launcherCloseLabel={launcherCloseLabel}
                launcherCloseImg={launcherCloseImg}
                launcherOpenImg={launcherOpenImg}
                closeComponent={closeComponent}
                launchComponent={launchComponent}
                resizable={resizable}
                fixedPosition={fixedPosition}
                alignLeft={alignLeft}
            />
        </WidgetContext.Provider>
    );
};
