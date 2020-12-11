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
                    <Link to={`/chat/${result.doctor||result.userId}`} key={id} style={{textDecoration:"none"}} onClick={()=>handleSetName(result.name)} >
                    <ConversationItem  name={result.name}  />
                    </Link>)
            })
            :<div></div>
        }
            
        </div>
    );
}

export default ConversationList;