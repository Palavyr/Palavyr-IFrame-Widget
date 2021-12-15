import { useState } from 'react';
import { Widget } from '../src/index';
import './app.scss';

import paul from './p.jpg';

const FALLBACK = 'https://www.palavyr.com';

export const App = () => {
    return (
        <>
            <div
                style={{
                    color: 'white',
                    fontWeight: 800,
                    textAlign: 'center',
                    top: '0px',
                    padding: '2rem',
                    height: '60px',
                    backgroundColor: 'rebeccapurple',
                }}
            >
                <h1 style={{ fontSize: '32pt' }}>Palavyr Chat Widget Demo</h1>
            </div>
            <FixedWidget />
            <AlternateContentWidget />
            <ControlledWidget />
        </>
    );
};

const ControlledWidget = () => {
    const [open, setOpen] = useState(false);
    const src = (process.env.PALAVYR_TEST_API_KEY as string) || FALLBACK;
    console.log(src);

    return (
        <div className="container">
            <div className="button" onClick={() => setOpen(!open)}>
                {open ? 'Close' : 'Open'}
            </div>
            <Widget
                open={open}
                src={src}
                fixedPosition={false}
                resizable
                startOpen
                style={{ height: '540px', width: '340px', marginTop: '1rem' }}
            />
        </div>
    );
};

const FixedWidget = () => {
    const src = (process.env.PALAVYR_TEST_API_KEY as string) || FALLBACK;
    return <Widget src={src} fixedPosition resizable startOpen={false} style={{ height: '540px' }} />;
};

const AlternateContentWidget = () => {
    const alternateContent = (
        <div className="alternate-content">
            <h3>Hey there!</h3>
            <img width="200px" src={paul} alt="wow"></img>
        </div>
    );

    return (
        <Widget
            style={{ height: '540px', overflow: 'hidden' }}
            fixedPosition
            alignLeft
            alternateContent={alternateContent}
            resizable
            startOpen
            launcherOpenLabel="Open"
            launcherCloseLabel="Close"
            closeComponent={<div>Close</div>}
            launchComponent={<div>Launch</div>}
            persistState={false}
        />
    );
};
