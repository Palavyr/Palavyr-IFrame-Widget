import React, { useEffect } from 'react';
import { useState } from 'react';
import PalavyrChatWidget from '../src/index';

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
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <div style={{ paddingLeft: '6rem' }}>
                    <h3>Alternate Content</h3>
                </div>
                <div>
                    <h3>Controlled</h3>
                </div>
                <div style={{ paddingRight: '6rem' }}>
                    <h3>Fixed Position Right with Auto Open</h3>
                </div>
            </div>
            <FixedWidget />
            <AlternateContentWidget />
            <ControlledWidget />
        </>
    );
};

const ControlledWidget = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);

    const src = (process.env.REACT_APP_PALAVYR_TEST_API_KEY as string) || FALLBACK;

    useEffect(() => {
        setTimeout(() => {
            setDisabled(false);
        }, 2000);
    }, []);

    return (
        <div className="container">
            <button disabled={disabled} className="button" onClick={() => setOpen(!open)}>
                {open ? 'Click to Close' : 'Click to Open'}
            </button>
            <PalavyrChatWidget
                IframeProps={{ id: 'pcw-iframe-1' }}
                open={open}
                setOpen={setOpen}
                src={src}
                fixedPosition={false}
                resizable
                containerStyles={{ height: '540px', width: '360px', marginTop: '1rem' }}
            />
        </div>
    );
};

const FixedWidget = () => {
    const src = (process.env.REACT_APP_PALAVYR_TEST_API_KEY as string) || FALLBACK;
    return (
        <>
            <PalavyrChatWidget
                IframeProps={{ id: 'pcw-iframe-2' }}
                src={src}
                fixedPosition
                resizable
                startOpen={false}
                containerStyles={{ height: '540px' }}
                autoOpen={3000}
                launcherButtonAdditionalStyles={{
                    height: '75px',
                    width: '75px',
                    borderBottomLeftRadius: '7px',
                    borderBottomRightRadius: '7px',
                }}
            />
        </>
    );
};

const AlternateContentWidget = () => {
    const alternateContent = (
        <div className="alternate-content">
            <h3>Hey there!</h3>
            <img width="200px" src={paul} alt="wow"></img>
        </div>
    );

    return (
        <>
            <PalavyrChatWidget
                disableBounce
                containerStyles={{ height: '540px', overflow: 'hidden' }}
                IframeProps={{ style: { border: 'none', height: '100%', width: '100%' } }}
                fixedPosition
                alignLeft
                alternateContent={alternateContent}
                resizable
                startOpen
                launcherOpenLabel="Open"
                launcherCloseLabel="Close"
                closeComponent={<div style={{ color: 'white' }}>Close</div>}
                openComponent={<div style={{ color: 'white' }}>Open</div>}
                persistState={false}
                launcherButtonAdditionalStyles={{
                    height: '68px',
                    width: '68px',
                    borderRadius: '50%',
                    borderBottomLeftRadius: '10px',
                    background: '#454040',
                    border: '5px solid white',
                }}
            />
        </>
    );
};

export const CustomLauncher = () => {
    return (
        <div
            className="pcw-close-launcher pcw-animation"
            style={{
                borderRadius: '50%',
                border: '2px solid white',
                backgroundColor: '#191921',
                height: '75px',
                width: '75px',
                padding: '10px',
            }}
        >
            <img src="/brand-images/logo.png" alt="logo" />
        </div>
    );
};
