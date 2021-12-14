/// <reference types="react" />
import { AltContent, AnyFunction } from './utils/types';
import { OptionalSrcProps } from './components/IFrameWindow';
export interface WidgetProps extends OptionalSrcProps {
    customLauncher?: AnyFunction;
    handleToggle?: AnyFunction;
    launcherOpenLabel?: string;
    launcherCloseLabel?: string;
    launcherCloseImg?: string;
    launcherOpenImg?: string;
    resizable?: boolean;
    startOpen?: boolean;
    alternateContent?: AltContent;
    fixedPosition?: boolean;
    open?: boolean;
    alignLeft?: boolean;
    closeComponent?: React.ReactNode;
    launchComponent?: React.ReactNode;
}
export declare const Widget: ({ src, customLauncher, handleToggle, launcherOpenLabel, launcherCloseLabel, launcherCloseImg, launcherOpenImg, resizable, startOpen, alternateContent, fixedPosition, open, alignLeft, closeComponent, launchComponent, ...iframeProps }: WidgetProps) => JSX.Element;
