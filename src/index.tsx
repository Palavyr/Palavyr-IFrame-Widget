import { WidgetLayout } from './components/WidgetLayout';
import { OptionalSrcProps } from './components/IFrameWindow';
import { useEffect, useState } from 'react';
import { WidgetContext } from './context/widgetContext';
import { AnyFunction, AltContent } from './types';
import React from 'react';

export interface WidgetProps extends OptionalSrcProps {
    customLauncher?: AnyFunction;
    handleToggle?: AnyFunction;
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

const Widget = ({
    src,
    customLauncher = undefined,
    handleToggle = undefined,
    launcherOpenLabel = 'Open chat',
    launcherCloseLabel = 'Close chat',
    launcherCloseImg = '',
    launcherOpenImg = '',
    resizable = true,
    startOpen = false,
    alternateContent = undefined,
    fixedPosition = true,
    open = undefined,
    alignLeft = false,
    persistState = true,
    closeComponent,
    launchComponent,
    ...iframeProps
}: WidgetProps) => {
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
        handleToggle ? handleToggle(widgetOpenState) : null;
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

export default Widget;
