/// <reference types="react" />
import './Launcher-style.scss';
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
export declare const Launcher: ({ toggle, openImg, closeImg, closeComponent, launchComponent, openLabel, closeLabel, alignLeft, }: LauncherProps) => JSX.Element;
