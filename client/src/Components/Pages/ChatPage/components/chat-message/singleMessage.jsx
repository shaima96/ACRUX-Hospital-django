import React from 'react';
import './Message.scss';

const SingleMessage = ({message}) => {
 

    const imageThumbnail = <img src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />;

    return (
                <div className="message-content">
                    {imageThumbnail}
                    <div className="message-text">
                       {message.text}
            </div>
        </div>
    );
}

export default SingleMessage;