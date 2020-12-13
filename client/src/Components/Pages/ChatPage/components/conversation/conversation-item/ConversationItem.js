import React from 'react';
import {connect} from "react-redux"

import './ConversationItem.scss';

const ConversationItem = ({name,image,lastTextObject,recieverId}) => {
 
    return (
        <div className='conversation' >
            <img src={image} alt="" />
            <div className="title-text">{name}</div>
            <div className="conversation-message">
               {lastTextObject[recieverId]
               ?lastTextObject[recieverId]
               :"LATEST TEXT"}
            </div>
        </div>
    );
}

const mapStateToProps=({user:{lastTextObject}})=>{
    return {
        lastTextObject
    }
}
export default connect(mapStateToProps)(ConversationItem);