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
            doctorName:""
        }
    }
    componentDidMount=()=> {
        console.log("d",this.props)
        const patientId = this.props.match.params.id
        this.getDoctors({pk : patientId})
           

    }
    getDoctors(obj) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };

        fetch('http://localhost:8000/patient/details/',requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data.doctors })
            })
            .then(()=>{
                console.log("pateint-doctors",this.state.results)
                // let user=this.state.results.filter(result=>Number(result.doctor)===Number(this.props.match.params.id))
                // this.setState({doctorName:user[0].doctorName})
            })
            // .then(()=>window.location.reload())
    }
    handleSetName=(doctorName)=>{
        this.setState({doctorName})
    }
    render() {
        return (
            <div id="rootme">
                <div id="chat-container">
                    <ConversationSearch />
                    <ConversationList results={this.state.results} handleSetName={this.handleSetName} />
                    <NewConversation />
                    <ChatTitle name={this.state.doctorName}/>
                    <ChatForm />
                </div>
            </div>
        );

    }
}




export default ChatShell;