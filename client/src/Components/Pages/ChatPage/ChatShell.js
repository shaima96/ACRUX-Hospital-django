import React from 'react';
import {connect} from "react-redux"

import ConversationSearch from './components/conversation/conversation-search/ConversationSearch';
import ConversationList from './components/conversation/conversation-list/ConversationList';
import NewConversation from './components/conversation/new-conversation/NewConversation';
import ChatTitle from './components/chat-title/ChatTitle';
import ChatForm from './components/chat-form/ChatForm';
import ChatMessage from "./components/chat-message/ChatMessgae.jsx"
import './ChatShell.scss';

class ChatShell extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            name:"",
            id:""
        }
    }
    componentDidMount=()=> {
        const pk = this.props.fetchId
        console.log("gggggggggggggggggggggggggggggggggggggg",this.props)
        this.getDoctors({pk})
           

    }
    getDoctors(obj) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
       if(this.props.role==="patient"){
        fetch('http://localhost:8000/patient/details',requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data.doctors })
            })
       }
       if(this.props.role==="doctor"){
        fetch('http://localhost:8000/doctor/details',requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log("wwwwwwwwwwwwwwwwwwwwwwwww",data.patients)
                this.setState({ results: data.patients })
            })
       }
        
            
    }
    handleSetName=(name,id)=>{
        this.setState({name,id})
    }
    render() {
        return (
            <div id="rootme">
                <div id="chat-container">
                    <ConversationSearch />
                    <ConversationList results={this.state.results} handleSetName={this.handleSetName} />
                    <ChatMessage idme={this.state.id}/>
                    <NewConversation />
                    <ChatTitle name={this.state.name}/>
                    <ChatForm idme={this.state.id} />
                </div>
            </div>
        );

    }
}



const mapStateToProps=({user:{role,fetchId}})=>{
    return {
        role,
        fetchId

    }
}

export default connect(mapStateToProps)(ChatShell);