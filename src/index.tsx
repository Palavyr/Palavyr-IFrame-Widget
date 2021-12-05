import { Provider } from 'react-redux';

import Widget from './components/Widget';

import store from './store';

import { AnyFunction } from './utils/types';

type Props = {
    src: string;
    showCloseButton?: boolean;
    fullScreenMode?: boolean;
    launcher?: AnyFunction;
    handleToggle?: AnyFunction;
    launcherOpenLabel?: string;
    launcherCloseLabel?: string;
    launcherCloseImg?: string;
    launcherOpenImg?: string;
    zoomStep?: number;
    resizable?: boolean;
} & typeof defaultProps;

function ConnectedWidget({
    src,
    showCloseButton,
    fullScreenMode,
    launcher,
    handleToggle,
    launcherOpenLabel,
    launcherCloseLabel,
    launcherCloseImg,
    launcherOpenImg,
    resizable,
    zoomStep,
}: Props) {
    return (
        <Provider store={store}>
            <Widget
                src={src}
                zoomStep={zoomStep}
                showCloseButton={showCloseButton}
                fullScreenMode={fullScreenMode}
                customLauncher={launcher}
                handleToggle={handleToggle}
                launcherOpenLabel={launcherOpenLabel}
                launcherCloseLabel={launcherCloseLabel}
                launcherCloseImg={launcherCloseImg}
                launcherOpenImg={launcherOpenImg}
                resizable={resizable}
            />
        </Provider>
    );
}

const defaultProps = {
    showCloseButton: true,
    fullScreenMode: false,
    launcherOpenLabel: 'Open chat',
    launcherCloseLabel: 'Close chat',
    launcherOpenImg: '',
    launcherCloseImg: '',
    imagePreview: false,
    zoomStep: 80,
    showBadge: true,
};
ConnectedWidget.defaultProps = defaultProps;

export default ConnectedWidget;
