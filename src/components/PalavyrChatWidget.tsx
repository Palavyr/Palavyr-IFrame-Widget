import { WidgetLayout } from './WidgetLayout';
import { HtmlIframeProps, OptionalSrcProps } from './IFrameWindow';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { WidgetContext } from './WidgetContext';
import React from 'react';
import { AltContent, AnyFunction, SetState } from '../types';

export interface PalavyrChatWidgetProps extends OptionalSrcProps {
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
    openComponent?: React.ReactNode;
    persistState?: boolean;
    containerStyles?: React.CSSProperties;
    customSpinner?: React.ReactNode | null;
    IframeProps?: HtmlIframeProps;
    autoOpen?: number;
    containerClassName?: string;
    customLauncher?: AnyFunction;
    onToggle?: (widgetOpenState: boolean, setWidgetOpenState: SetState<boolean>) => void;
    autoOpenCallback?: () => void;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    disableBounce?: boolean;
    openImgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
    closeImgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
    launcherButtonAdditionalStyles?: React.CSSProperties;
    onEffect?: (widgetOpenState: boolean, setWidgetOpenState: SetState<boolean>) => void;
    onEffectDependencyArray?: any[];
}

export const PalavyrChatWidget = ({
    src,
    customLauncher,
    onToggle,
    open,
    setOpen,
    closeComponent,
    openComponent,
    alternateContent,
    autoOpen,
    autoOpenCallback,
    startOpen,
    onEffect,
    onEffectDependencyArray,
    containerClassName = '',
    launcherOpenLabel = 'Open chat',
    launcherCloseLabel = 'Close chat',
    launcherCloseImg = '',
    launcherOpenImg = '',
    resizable = true,
    fixedPosition = true,
    alignLeft = false,
    persistState = true,
    containerStyles = {},
    customSpinner = null,
    IframeProps = {},
    disableBounce = false,
    openImgProps = {},
    closeImgProps = {},
    launcherButtonAdditionalStyles = {},
}: PalavyrChatWidgetProps) => {
    const [widgetOpenState, setWidgetOpenState] = useState(false);
    const [visible, _] = useState(undefined);

    if (open && setOpen === undefined) throw new Error("'setOpen' is required when 'open' is true");
    if (setOpen && open === undefined) throw new Error("'open' is required when 'setOpen' is true");
    if (open && setOpen && autoOpen !== undefined)
        throw new Error("'autoOpen' is not compatible with 'open' and 'setOpen'");
    if (open && setOpen && autoOpenCallback !== undefined)
        throw new Error("'autoOpenCallback' is not compatible with 'open' and 'setOpen'");
    if (open && setOpen && IframeProps.delay !== undefined)
        throw new Error("'IframeProps.delay' is not compatible with 'open' and 'setOpen'");
    if (onEffect !== undefined && !onEffectDependencyArray)
        throw new Error("'onEffectDependencyArray' is required when 'onEffect' is defined");

    useEffect(() => {
        if (onEffect) onEffect(widgetOpenState, setWidgetOpenState);
    }, onEffectDependencyArray);

    useEffect(() => {
        if (!autoOpen) {
            if (startOpen !== undefined && setOpen) {
                setOpen(startOpen);
            } else if (startOpen !== undefined) {
                open = startOpen;
            }

            if (!fixedPosition) {
                if (setOpen) {
                    setOpen(true);
                } else {
                    open = true;
                }
            }

            if (open !== undefined) {
                setWidgetOpenState(open);
            }
        }
        if (autoOpenCallback) {
            autoOpenCallback();
        }
    }, [startOpen]);

    useEffect(() => {
        if (open && !widgetOpenState) {
            setWidgetOpenState(true);
        } else {
            setWidgetOpenState(false);
        }
    }, [open]);

    const toggleConversation = () => {
        setWidgetOpenState(!widgetOpenState);

        /* eslint-disable-next-line */
        onToggle !== undefined ? onToggle(widgetOpenState, setWidgetOpenState) : null;
    };

    if (fixedPosition) {
        resizable = false;
    }

    return (
        <WidgetContext.Provider
            value={{ widgetOpenState, setWidgetOpenState, visible, toggleConversation, persistState }}
        >
            <WidgetLayout
                src={src}
                containerClassName={containerClassName}
                alternateContent={alternateContent}
                onToggleConversation={toggleConversation}
                customLauncher={customLauncher}
                launcherOpenLabel={launcherOpenLabel}
                launcherCloseLabel={launcherCloseLabel}
                launcherCloseImg={launcherCloseImg}
                launcherOpenImg={launcherOpenImg}
                closeComponent={closeComponent}
                openComponent={openComponent}
                resizable={resizable}
                fixedPosition={fixedPosition}
                alignLeft={alignLeft}
                containerStyles={containerStyles}
                customSpinner={customSpinner}
                IframeProps={IframeProps}
                autoOpen={autoOpen}
                autoOpenCallback={autoOpenCallback}
                disableBounce={disableBounce}
                openImgProps={openImgProps}
                closeImgProps={closeImgProps}
                launcherButtonAdditionalStyles={launcherButtonAdditionalStyles}
            />
        </WidgetContext.Provider>
    );
};
