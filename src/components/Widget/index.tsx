import { useDispatch } from 'react-redux';

import { toggleChat } from '../../store/actions';
import { isWidgetOpened } from '../../store/dispatcher';
import { AnyFunction } from '../../utils/types';

import WidgetLayout from './layout';

type Props = {
    src: string;
    zoomStep?: number;
    showCloseButton: boolean;
    fullScreenMode: boolean;
    customLauncher?: AnyFunction;
    handleToggle?: AnyFunction;
    launcherOpenLabel: string;
    launcherCloseLabel: string;
    launcherOpenImg: string;
    launcherCloseImg: string;
    resizable?: boolean;
};

function Widget({
    src,
    zoomStep,
    fullScreenMode,
    customLauncher,
    handleToggle,
    launcherOpenLabel,
    launcherCloseLabel,
    launcherCloseImg,
    launcherOpenImg,
    resizable = true,
}: Props) {
    const dispatch = useDispatch();

    const toggleConversation = () => {
        dispatch(toggleChat());
        handleToggle ? handleToggle(isWidgetOpened()) : null;
    };

    return (
        <WidgetLayout
            src={src}
            zoomStep={zoomStep}
            onToggleConversation={toggleConversation}
            fullScreenMode={fullScreenMode}
            customLauncher={customLauncher}
            launcherOpenLabel={launcherOpenLabel}
            launcherCloseLabel={launcherCloseLabel}
            launcherCloseImg={launcherCloseImg}
            launcherOpenImg={launcherOpenImg}
            resizable={resizable}
        />
    );
}

export default Widget;
