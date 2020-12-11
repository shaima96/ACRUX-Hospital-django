import React, { useState,useRef } from 'react';
import firebase from 'firebase/app';
import {firestore} from "../../../../../firebase/firebase.utils" 
import FormButton from '../controls/buttons/FormButton';
import AttachmentIcon from '../controls/icons/attachment-icon/AttachmentIcon';

import './ChatForm.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const isMessageEmpty = (textMessage) => {
    return adjustTextMessage(textMessage).length === 0;
}

const adjustTextMessage = (textMessage) => {
    return textMessage.trim();
};

const ChatForm = (props) => {
    let collectionLink=`messages/${props.fetchId}/${props.match.params.id}`// logged in as patient
        if(props.role==="doctor"){
            collectionLink=`messages/${props.match.params.id}/${props.fetchId}`
        }
    const dummy = useRef();
    const messagesRef = firestore.collection(collectionLink);
    const [textMessage, setTextMessage] = useState('');
    const disableButton = isMessageEmpty(textMessage);

    const sendMessage = async (e) => {
        e.preventDefault();
        await messagesRef.add({
          text: textMessage,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
    
        setTextMessage('');
        // dummy.current.scrollIntoView({ behavior: 'smooth' });
      }
    return (
        <form id="chat-form" onSubmit={sendMessage}>
            <>
                <input 
                    type="text" 
                    placeholder="type a message" 
                    value={textMessage}
                    onChange={ (e) => { setTextMessage(e.target.value); } } />
                <FormButton disabled={ disableButton }>Send</FormButton>
                <div title="Add Attachment">
                    <AttachmentIcon />
                </div>
            </>
        </form> 
    );
}
const mapStateToProps=({user:{role,fetchId}})=>{
    return {
        role,
        fetchId

    }
}
export default withRouter(connect(mapStateToProps)(ChatForm));


