import './Launcher-style.scss';
import { useContext } from 'react';
import classNames from 'classnames';
import { WidgetContext } from '../context/widgetContext';
import React from 'react';

const openLauncher = require('../../assets/launcher_button.svg') as string;
const close = require('../../assets/clear-button.svg') as string;

export interface LauncherProps {
    toggle: () => void;
    openLabel: string;
    closeLabel: string;
    closeImg: string;
    openImg: string;
    alignLeft?: boolean;
    closeComponent?: React.ReactNode;
    launchComponent?: React.ReactNode;
}

export const Launcher = ({
    toggle,
    openImg,
    closeImg,
    closeComponent,
    launchComponent,
    openLabel,
    closeLabel,
    alignLeft,
}: LauncherProps) => {
    const { widgetOpenState } = useContext(WidgetContext);

    const toggleChat = () => {
        toggle();
    };

    const styles = widgetOpenState
        ? { display: 'flex', alignItems: 'center', justifyContent: 'center' }
        : { display: 'flex', alignItems: 'center', justifyContent: 'center' };

    if (alignLeft == undefined) alignLeft = false;

    return (
        <button
            type="button"
            style={styles}
            className={classNames({
                'pcw-hide-sm': widgetOpenState === true,
                'pcw-animation': widgetOpenState === false || widgetOpenState === undefined,
                'pcw-launcher': !alignLeft,
                'pcw-launcher-left': alignLeft,
            })}
            onClick={toggleChat}
        >
            {widgetOpenState ? (
                <>{closeComponent ?? <img src={closeImg || close} className="pcw-close-launcher" alt={openLabel} />}</>
            ) : (
                <>
                    {launchComponent ?? (
                        <img
                            src={launchComponent || openImg || openLauncher}
                            className="pcw-open-launcher"
                            alt={closeLabel}
                        />
                    )}
                </>
            )}
        </button>
    );
};
