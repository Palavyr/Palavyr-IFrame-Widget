import { IframeHTMLAttributes } from 'react';
import './IFrameWindow-styles.scss';

export interface IFrameWindowProps extends React.DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
    src: string;
}

export const IFrameWindow = ({ src, ...iframeProps }: IFrameWindowProps) => {
    return (
        <div id="messages" className="pcw-messages-container">
            <iframe style={{ height: '100%', width: '100%', border: '0px' }} src={src} {...iframeProps}></iframe>
        </div>
    );
};
