import { toggleChat } from './store/actions';
import { Provider, useDispatch } from 'react-redux';
import { WidgetLayout } from './components/WidgetLayout';
import store from './store';
import { isWidgetOpened } from './store/dispatcher';
import { AnyFunction } from './utils/types';

export interface WidgetProps {
    src: string;
    showCloseButton?: boolean;
    fullScreenMode?: boolean;
    customLauncher?: AnyFunction;
    handleToggle?: AnyFunction;
    launcherOpenLabel?: string;
    launcherCloseLabel?: string;
    launcherCloseImg?: string;
    launcherOpenImg?: string;
    zoomStep?: number;
    resizable?: boolean;
}

const WidgetInner = ({
    src,
    showCloseButton = false,
    customLauncher = undefined,
    handleToggle = undefined,
    launcherOpenLabel = 'Open chat',
    launcherCloseLabel = 'Close chat',
    launcherCloseImg = '',
    launcherOpenImg = '',
    resizable = true,
    zoomStep = 80,
}: WidgetProps) => {
    const dispatch = useDispatch();

    const toggleConversation = () => {
        dispatch(toggleChat());
        handleToggle ? handleToggle(isWidgetOpened()) : null;
    };

    return (
        <WidgetLayout
            src={src}
            onToggleConversation={toggleConversation}
            customLauncher={customLauncher}
            launcherOpenLabel={launcherOpenLabel}
            launcherCloseLabel={launcherCloseLabel}
            launcherCloseImg={launcherCloseImg}
            launcherOpenImg={launcherOpenImg}
            resizable={resizable}
        />
    );
};

export const Widget = (props: WidgetProps) => {
    return (
        <Provider store={store}>
            <WidgetInner {...props} />
        </Provider>
    );
};
