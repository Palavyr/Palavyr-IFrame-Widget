import { useSelector } from 'react-redux';
import cn from 'classnames';
import { GlobalState } from '../../../../store/types';

import './style.scss';

const openLauncher = require('../../../../../assets/launcher_button.svg') as string;
const close = require('../../../../../assets/clear-button.svg') as string;

type Props = {
    toggle: () => void;
    openLabel: string;
    closeLabel: string;
    closeImg: string;
    openImg: string;
};

function Launcher({ toggle, openImg, closeImg, openLabel, closeLabel }: Props) {
    const { showChat } = useSelector((state: GlobalState) => ({
        showChat: state.behavior.showChat,
    }));

    const toggleChat = () => {
        toggle();
    };

    return (
        <button
            type="button"
            className={cn('rcw-launcher', { 'rcw-hide-sm': showChat, 'rcw-animation': !showChat })}
            onClick={toggleChat}
        >
            {showChat ? (
                <img src={closeImg || close} className="rcw-close-launcher" alt={openLabel} />
            ) : (
                <img src={openImg || openLauncher} className="rcw-open-launcher" alt={closeLabel} />
            )}
        </button>
    );
}

export default Launcher;
