import './IFrameWindow-styles.scss';

export interface IFrameWindowProps {
    src: string;
}

export const IFrameWindow = ({ src }: IFrameWindowProps) => {
    return (
        <div id="messages" className="rcw-messages-container">
            <iframe style={{ height: '100%', width: '100%', border: '0px' }} src={src}></iframe>
        </div>
    );
};
