import { IframeHTMLAttributes } from 'react';
import './IFrameWindow-styles.scss';
import React from 'react';

export interface BaseFrameProps
    extends React.DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {}

export interface OptionalSrcProps extends BaseFrameProps {
    src?: string;
}

export interface DefiniteFrameProps extends BaseFrameProps {
    src: string;
}

export const IFrameWindow = ({ src, ...iframeProps }: DefiniteFrameProps) => {
    return <iframe {...iframeProps} style={{ height: '100%', width: '100%', border: '0px' }} src={src}></iframe>;
};
