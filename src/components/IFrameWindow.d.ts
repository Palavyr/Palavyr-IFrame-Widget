import { IframeHTMLAttributes } from 'react';
import './IFrameWindow-styles.scss';
export interface BaseFrameProps extends React.DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
}
export interface OptionalSrcProps extends BaseFrameProps {
    src?: string;
}
export interface DefiniteFrameProps extends BaseFrameProps {
    src: string;
}
export declare const IFrameWindow: ({ src, ...iframeProps }: DefiniteFrameProps) => JSX.Element;
