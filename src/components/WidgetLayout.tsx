import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { GlobalState } from 'src/store/types';
import { AnyFunction } from 'src/utils/types';

import './WidgetLayout-style.scss';
import { IFrameContainer } from './IFrameContainer';
import { Launcher } from './Launcher';

type WidgetLayoutProps = {
    onToggleConversation: AnyFunction;
    customLauncher?: AnyFunction;
    launcherOpenLabel: string;
    launcherCloseLabel: string;
    launcherCloseImg: string;
    launcherOpenImg: string;
    imagePreview?: boolean;
    resizable?: boolean;
    src: string;
};

export const WidgetLayout = ({
    src,
    onToggleConversation,
    customLauncher,
    launcherOpenLabel,
    launcherCloseLabel,
    launcherCloseImg,
    launcherOpenImg,
    imagePreview,
    resizable,
}: WidgetLayoutProps) => {
    const { showChat, visible } = useSelector((state: GlobalState) => ({
        showChat: state.behavior.showChat,
        visible: state.preview.visible,
    }));

    useEffect(() => {
        document.body.setAttribute('style', `overflow: ${visible ? 'hidden' : 'auto'}`);
    }, [visible]);

    console.log(visible);

    return (
        <div
            className={cn('rcw-widget-container', {
                'rcw-previewer': imagePreview,
                'rcw-close-widget-container ': !showChat,
            })}
        >
            <IFrameContainer
                src={src}
                showChat={showChat}
                className={showChat ? 'active' : 'hidden'}
                resizable={resizable}
            />
            {customLauncher ? (
                customLauncher(onToggleConversation)
            ) : (
                <Launcher
                    toggle={onToggleConversation}
                    openLabel={launcherOpenLabel}
                    closeLabel={launcherCloseLabel}
                    closeImg={launcherCloseImg}
                    openImg={launcherOpenImg}
                />
            )}
        </div>
    );
};
