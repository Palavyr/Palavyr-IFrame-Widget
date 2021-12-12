import { useSelector } from 'react-redux';
import cn from 'classnames';

import './Launcher-style.scss';
import { GlobalState } from '@types';

const openLauncher = require('../../assets/launcher_button.svg') as string;
const close = require('../../assets/clear-button.svg') as string;

export interface LauncherProps {
    toggle: () => void;
    openLabel: string;
    closeLabel: string;
    closeImg: string;
    openImg: string;
}

export const Launcher = ({ toggle, openImg, closeImg, openLabel, closeLabel }: LauncherProps) => {
    const { showChat } = useSelector((state: GlobalState) => ({
        showChat: state.behavior.showChat,
    }));

    const toggleChat = () => {
        toggle();
    };

    const styles = showChat
        ? { display: 'flex', alignItems: 'center', justifyContent: 'center' }
        : { display: 'flex', alignItems: 'center', justifyContent: 'center' };

    return (
        <button
            type="button"
            style={styles}
            className={cn('pcw-launcher', { 'pcw-hide-sm': showChat, 'pcw-animation': !showChat })}
            onClick={toggleChat}
        >
            {showChat ? (
                <img src={closeImg || close} className="pcw-close-launcher" alt={openLabel} />
            ) : (
                <img src={openImg || openLauncher} className="pcw-open-launcher" alt={closeLabel} />
            )}
        </button>
    );
};
