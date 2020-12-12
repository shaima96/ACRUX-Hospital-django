import React from 'react';

import './ChatTitle.scss';

const ChatTitle = ({name}) => {
  

    return (
        <div id="chat-title">
            <span>{name}</span>
        </div>
    );
}

export default ChatTitle;