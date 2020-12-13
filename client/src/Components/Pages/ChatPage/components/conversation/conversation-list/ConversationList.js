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
                console.log("result",result)
                return (
                    <Link to={`/chat/${result.doctorId||result.patientId}`} key={id} style={{textDecoration:"none"}} onClick={()=>handleSetName(result.doctorName||result.patientName,result.doctorId||result.patientId)} >
                    <ConversationItem recieverId={result.doctorId||result.patientId} image={result.image} name={result.doctorName||result.patientName}  />
                    </Link>)
            })
            :<div></div>
        }
            
        </div>
    );
}


export default ConversationList;