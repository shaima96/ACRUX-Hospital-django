import React, { useRef} from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {firestore} from "../../../../../firebase/firebase.utils" 
import {connect} from "react-redux"
import './Message.scss';
import SingleMessage from "./singleMessage"
import { withRouter } from 'react-router-dom';

const ChatMessage = (props) => {
    let collectionLink=`messages/${props.fetchId}/${props.match.params.id}`// logged in as patient
    console.log("collectionLink",collectionLink)

    if(props.role==="doctor"){
        collectionLink=`messages/${props.match.params.id}/${props.fetchId}`
        console.log("collectionLink",collectionLink)
    }
    const dummy = useRef();
    const messagesRef = firestore.collection(collectionLink);
    const query = messagesRef.orderBy('createdAt')
    
    const [messages] = useCollectionData(query, { idField: 'id' });

    return (
        <div id="chat-message-list">
            {/* <div className='message-row other-message'> */}
            {messages && messages.reverse().map(msg => <SingleMessage key={msg.id} message={msg} currentId={props.fetchId} />)}
                <span ref={dummy}></span>
                </div>
        //  </div>
    );
}
const mapStateToProps=({user:{role,fetchId}})=>{
    return {
        role,
        fetchId
    }
}
export default withRouter(connect(mapStateToProps)(ChatMessage));
