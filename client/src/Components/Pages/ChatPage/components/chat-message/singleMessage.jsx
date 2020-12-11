import React from 'react';
import './Message.scss';

const SingleMessage = ({message}) => {
 
    console.log(message.image)
    const imageThumbnail = <img src={message.image||"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"} alt="" />;

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