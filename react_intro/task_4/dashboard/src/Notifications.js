import React from 'react';
import './Notifications.css';
import './utils.js';
import { getLatestNotification } from './utils.js';

export function Notifications() {
    const handleCloseButtonClick = () => {
        console.log('Close button has been clicked');
    };

    const buttonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        color: 'black',
    }

    const LastNofify = getLatestNotification();

    return (
        <div className="Notifications">
            <button style={buttonStyle} aria-label='Close' onClick={handleCloseButtonClick}>x</button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: LastNofify }}></li>
            </ul>
        </div>
    );
}
