import React from 'react';

import ConversationItem from '../conversation-item/ConversationItem';
import './ConversationList.scss';

const ConversationList = () => {
    return (
        <div id="conversation-list">
            <ConversationItem />
        </div>
    );
}

export default ConversationList;