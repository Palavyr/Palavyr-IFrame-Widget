import { useRef, useState } from 'react';
import Loader from './components/Loader';
import './styles.scss';

type Props = {
    src: string;
};

function IframeWindow({ src }: Props) {
    const [loading, setLoading] = useState(true);

    const frameRef = useRef<HTMLIFrameElement | null>(null);

    const hideLoader = () => {
        setLoading(!loading);
    };

    return (
        <div id="messages" className="rcw-messages-container">
            <iframe
                onLoad={hideLoader}
                ref={frameRef}
                id="palavyr-iframe"
                style={{ height: '100%', width: '100%', border: '0px' }}
                src={src}
            ></iframe>
            <Loader typing={loading} />
        </div>
    );
}

export default IframeWindow;
