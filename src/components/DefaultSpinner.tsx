import React from 'react';

// https://loading.io/css/

export const DefaultSpinner = () => (
    <div
        id="pcw-default-spinner"
        style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            opacity: 0.8,
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
