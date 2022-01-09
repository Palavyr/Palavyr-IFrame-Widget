import { Dispatch, IframeHTMLAttributes, SetStateAction, useEffect, useState } from 'react';
import React from 'react';
import './styles.scss';
import { DefaultSpinner } from './DefaultSpinner';

export type HtmlIframeProps = React.DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> & {
    delay?: number;
};

export interface OptionalSrcProps {
    src?: string;
}

export interface DefiniteFrameProps {
    iframeRefreshed: boolean;
    src: string;
    customSpinner: React.ReactNode | null;
    IframeProps: HtmlIframeProps;
    reloadIframe: Dispatch<SetStateAction<boolean>>;
}

const iframeId = 'pcw-iframe';
type Iframe = HTMLElement & {
    src: string;
};

export const IFrameWindow = ({
    src,
    customSpinner,
    iframeRefreshed,
    reloadIframe,
    IframeProps,
}: DefiniteFrameProps) => {
    const [frameLoading, setFrameLoading] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (IframeProps.delay !== undefined) {
            setTimeout(() => {
                setLoading(false);
            }, IframeProps.delay);
        } else {
            setLoading(false);
        }
    }, []);

    const reload = async () => {
        const iframe = document.getElementById(iframeId) as Iframe;
        if (iframe) {
            iframe.src = src;
        }
        reloadIframe(!iframeRefreshed);
    };

    useEffect(() => {
        (async () => {
            if (IframeProps.delay !== undefined) {
                setTimeout(async () => {
                    await reload();
                }, IframeProps.delay);
            } else {
                await reload();
            }
        })();
    }, []);

    return (
        <>
            {loading ? (
                customSpinner ?? <DefaultSpinner />
            ) : (
                <>
                    {frameLoading && (customSpinner ?? <DefaultSpinner />)}
                    <iframe
                        src={src ?? ''}
                        id={IframeProps.id ?? iframeId}
                        onLoadStart={() => {
                            setLoading(true);
                            setFrameLoading(true);
                        }}
                        onLoad={() => {
                            setFrameLoading(false);
                            setLoading(false);
                            const el = document.getElementById(IframeProps.id ?? iframeId);
                            if (el) {
                                el.style.opacity = '1';
                            }

                            const spinnerel = document.getElementById('pcw-default-spinner');
                            if (spinnerel) {
                                spinnerel.style.opacity = '1';
                            }
                        }}
                        style={{ height: '100%', width: '100%', border: '0px' }}
                        {...IframeProps}
                    ></iframe>
                </>
            )}
        </>
    );
};
