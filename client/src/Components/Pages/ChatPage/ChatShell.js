import React from 'react';


import ConversationSearch from './components/conversation/conversation-search/ConversationSearch';
import ConversationList from './components/conversation/conversation-list/ConversationList';
import NewConversation from './components/conversation/new-conversation/NewConversation';
import ChatTitle from './components/chat-title/ChatTitle';
import ChatForm from './components/chat-form/ChatForm';

import './ChatShell.scss';

class ChatShell extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            name:""
        }
    }
    componentDidMount=()=> {
        console.log("d",this.props)
        this.getDoctors()   

    }
    getDoctors() {
        fetch('http://localhost:8000/doctor/')
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data })
            })
            .then(()=>{
                let user=this.state.results.filter(result=>Number(result.doctor||result.userId)===Number(this.props.match.params.id))
                this.setState({name:user[0].name})
            })
            // .then(()=>window.location.reload())
    }
    handleSetName=(name)=>{
        this.setState({name})
    }
    render() {
        return (
            <div id="rootme">
                <div id="chat-container">
                    <ConversationSearch />
                    <ConversationList results={this.state.results} handleSetName={this.handleSetName} />
                    <NewConversation />
                    <ChatTitle name={this.state.name}/>
                    <ChatForm />
                </div>
            </div>
        );

    }
}




export default ChatShell;