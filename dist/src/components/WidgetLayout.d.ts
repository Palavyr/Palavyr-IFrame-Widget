/// <reference types="react" />
import { AltContent, AnyFunction } from 'src/utils/types';
import './WidgetLayout-style.scss';
import { OptionalSrcProps } from './IFrameWindow';
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
export declare const WidgetLayout: ({ src, onToggleConversation, customLauncher, launcherOpenLabel, launcherCloseLabel, launcherCloseImg, launcherOpenImg, closeComponent, launchComponent, imagePreview, resizable, alternateContent, fixedPosition, alignLeft, ...iframeProps }: WidgetLayoutProps) => JSX.Element;
