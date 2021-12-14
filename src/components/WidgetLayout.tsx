import { useContext, useEffect } from 'react';
import classNames from 'classnames';

import { AltContent, AnyFunction } from 'src/utils/types';

import './WidgetLayout-style.scss';
import { IFrameContainer } from './IFrameContainer';
import { Launcher } from './Launcher';
import { OptionalSrcProps } from './IFrameWindow';
import { WidgetContext } from '../context/widgetContext';

export interface WidgetLayoutProps extends OptionalSrcProps {
    onToggleConversation: AnyFunction;
    customLauncher?: AnyFunction;
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
    const { widgetOpenState, visible } = useContext(WidgetContext);

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
                className={widgetOpenState ? 'active' : 'hidden'}
                resizable={resizable}
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
