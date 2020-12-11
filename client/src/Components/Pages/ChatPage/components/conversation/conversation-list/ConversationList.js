import React from 'react';

import ConversationItem from '../conversation-item/ConversationItem';
import './ConversationList.scss';
import {Link} from "react-router-dom"
const ConversationList = ({results,handleSetName}) => {
    return (
        <div id="conversation-list">
        {
            results?
            results.map((result,id)=>{
                return (
                    <Link to={`/chat/${result.doctorId}`} key={id} style={{textDecoration:"none"}} onClick={()=>handleSetName(result.doctorName)} >
                    <ConversationItem  name={result.doctorName}  />
                    </Link>)
            })
            :<div></div>
        }
            
        </div>
    );
}

export default ConversationList;