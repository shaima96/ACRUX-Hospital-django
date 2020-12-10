import React from 'react';


import ConversationSearch from './components/conversation/conversation-search/ConversationSearch';
import ConversationList from './components/conversation/conversation-list/ConversationList';
import NewConversation from './components/conversation/new-conversation/NewConversation';
import ChatTitle from './components/chat-title/ChatTitle';
import ChatForm from './components/chat-form/ChatForm';

import './ChatShell.scss';

const ChatShell = () => {


    return (
            <div id="rootme">
                <div id="chat-container">
                    <ConversationSearch />
                    <ConversationList />
                    <NewConversation /> 
                    <ChatTitle />
                    <ChatForm />
                </div>
            </div>
    );
}




export default ChatShell;