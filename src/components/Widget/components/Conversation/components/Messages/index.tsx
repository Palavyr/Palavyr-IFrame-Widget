import './styles.scss';

type Props = {
    src: string;
};

function IframeWindow({ src }: Props) {
    return (
        <div id="messages" className="rcw-messages-container">
            <iframe style={{ height: '100%', width: '100%', border: '0px' }} src={src}></iframe>
        </div>
    );
}

export default IframeWindow;
