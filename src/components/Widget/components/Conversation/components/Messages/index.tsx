import { useRef, useState } from 'react';
import './styles.scss';

type Props = {
    src: string;
};

function IframeWindow({ src }: Props) {
    const [loading, setLoading] = useState(true);

    const hideLoader = () => {
        setLoading(false);
    };

    return (
        <div id="messages" className="rcw-messages-container">
            {loading && (
                <div className="ring">Loading
                <span></span>
              </div>
            )}
            <iframe onLoad={hideLoader} style={{ height: '100%', width: '100%', border: '0px' }} src={src}></iframe>
        </div>
    );
}

export default IframeWindow;
