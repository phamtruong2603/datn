import React from 'react';
import './Floating.css';
import chat from '../../images/chat.svg'

const Chat = () => {
    return (
        <div className='floating-chat'>
            <img src={chat} alt="" />
        </div>
    )
}

export default Chat