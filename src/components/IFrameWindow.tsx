import { Dispatch, IframeHTMLAttributes, SetStateAction, useEffect, useState } from 'react';
import React from 'react';
import './styles.scss';

export type HtmlIframeProps = React.DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> & {
    delay?: number;
};

export interface BaseFrameProps {}

export interface OptionalSrcProps extends BaseFrameProps {
    src?: string;
}

export interface DefiniteFrameProps extends BaseFrameProps {
    iframeRefreshed: boolean;
    src: string;
    customSpinner: React.ReactNode | null;
    IframeProps: HtmlIframeProps;
}

const iframeId = 'pcw-iframe';
type Iframe = HTMLElement & {
    src: string;
};

const DefaultSpinner = () => (
    <div
        style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <div className="pcw-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export const IFrameWindow = ({ src, customSpinner, iframeRefreshed, IframeProps }: DefiniteFrameProps) => {
    const [frameLoading, setFrameLoading] = useState<boolean>(true);
    const [state, setState] = useState<boolean | null>(null);
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

    const useDelay = () => {
        if (iframeRefreshed != state) {
            const iframe = document.getElementById(iframeId) as Iframe;
            if (iframe) {
                iframe.src = src;
            }
            setState(iframeRefreshed);
        }
    };

    useEffect(() => {
        if (IframeProps.delay !== undefined) {
            setTimeout(() => {
                useDelay();
            }, IframeProps.delay);
        } else {
            useDelay();
        }
    }, []);

    return (
        <>
            {loading ? (
                customSpinner ?? <DefaultSpinner />
            ) : (
                <>
                    {frameLoading && (customSpinner ?? <DefaultSpinner />)}
                    <iframe
                        id={iframeId}
                        onLoadStart={() => setFrameLoading(true)}
                        onLoad={() => {
                            setFrameLoading(false);
                            setLoading(false);
                            setState(iframeRefreshed)

                            const el = document.getElementById(iframeId);
                            if (el) {
                                el.style.opacity = '1';
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
