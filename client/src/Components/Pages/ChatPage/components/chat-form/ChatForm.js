import React, { useState } from 'react';

import FormButton from '../controls/buttons/FormButton';
import AttachmentIcon from '../controls/icons/attachment-icon/AttachmentIcon';

import './ChatForm.scss';

const isMessageEmpty = (textMessage) => {
    return adjustTextMessage(textMessage).length === 0;
}

const adjustTextMessage = (textMessage) => {
    return textMessage.trim();
};

const ChatForm = () => {
    const [textMessage, setTextMessage] = useState('');
    const disableButton = isMessageEmpty(textMessage);
    let handleFormSubmit = null;

   

    return (
        <form id="chat-form" onSubmit={handleFormSubmit}>
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

export default ChatForm;