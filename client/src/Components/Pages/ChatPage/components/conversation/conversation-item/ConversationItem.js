import React from 'react';
import {connect} from "react-redux"

import './ConversationItem.scss';

const ConversationItem = ({name,image}) => {
 
    return (
        <div className='conversation' >
            <img src={image} alt="" />
            <div className="title-text">{name}</div>
            <div className="conversation-message">
               LATEST TEXT
            </div>
        </div>
    );
}


export default ConversationItem;