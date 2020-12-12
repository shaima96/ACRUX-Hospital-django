import React from 'react';

import './ChatTitle.scss';
import {connect} from "react-redux"
const ChatTitle = ({name,contactName}) => {
  

    return (
        <div id="chat-title">
            <span>{contactName||name}</span>
        </div>
    );
}

const mapStateToProps = ({ user: { contactName } }) => {
    return {
        contactName
    }
}
export default connect(mapStateToProps)(ChatTitle);