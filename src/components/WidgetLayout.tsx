import { useContext, useEffect } from 'react';
import classNames from 'classnames';
import React from 'react';

import { IFrameContainer } from './IFrameContainer';
import { Launcher } from './Launcher';
import { OptionalSrcProps } from './IFrameWindow';
import { WidgetContext } from '../context/widgetContext';
import { AltContent } from '../types';
import './styles.scss';

export interface WidgetLayoutProps extends OptionalSrcProps {
    onToggleConversation(...args: any): any;
    customLauncher?: (...args: any) => any;
    launcherOpenLabel: string;
    launcherCloseLabel: string;
    launcherCloseImg: string;
    launcherOpenImg: string;
    imagePreview?: boolean;
    resizable?: boolean;
    startOpen?: boolean;
    alternateContent?: AltContent;
    fixedPosition?: boolean;
    alignLeft?: boolean;
    closeComponent?: React.ReactNode;
    launchComponent?: React.ReactNode;
}

export const WidgetLayout = ({
    src,
    onToggleConversation,
    customLauncher,
    launcherOpenLabel,
    launcherCloseLabel,
    launcherCloseImg,
    launcherOpenImg,
    closeComponent,
    launchComponent,
    imagePreview,
    resizable,
    alternateContent,
    fixedPosition,
    alignLeft,
    ...iframeProps
}: WidgetLayoutProps) => {
    const { widgetOpenState, visible, persistState } = useContext(WidgetContext);

    useEffect(() => {
        document.body.setAttribute('style', `overflow: ${visible ? 'hidden' : 'auto'}`);
    }, [visible]);

    return (
        <div
            className={classNames({
                'pcw-widget-container-fixed-left': alignLeft && fixedPosition,
                'pcw-widget-container-fixed': !alignLeft && fixedPosition,
                'pcw-widget-container': !fixedPosition,
                'pcw-close-widget-container ': !widgetOpenState,
            })}
        >
            <IFrameContainer
                src={src}
                alternateContent={alternateContent}
                widgetOpenState={widgetOpenState}
                className={widgetOpenState || !fixedPosition ? 'active' : 'hidden'}
                resizable={resizable}
                persistState={persistState}
                {...iframeProps}
            />
            {fixedPosition && (
                <>
                    {customLauncher ? (
                        customLauncher(onToggleConversation)
                    ) : (
                        <Launcher
                            alignLeft={alignLeft}
                            toggle={onToggleConversation}
                            openLabel={launcherOpenLabel}
                            closeLabel={launcherCloseLabel}
                            closeImg={launcherCloseImg}
                            openImg={launcherOpenImg}
                            closeComponent={closeComponent}
                            launchComponent={launchComponent}
                        />
                    )}
                </>
            )}
        </div>
    );
};
