import React from 'react';
import classNames from 'classnames';

import './ConversationItem.scss';

const ConversationItem = () => {
    const className = classNames('conversation');

    return (
        <div className={className} >
            <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="" />
            <div className="title-text">USERNAME</div>
            <div className="conversation-message">
               LATEST TEXT
            </div>
        </div>
    );
}

export default ConversationItem;