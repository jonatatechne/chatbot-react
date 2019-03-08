import React, { Component } from 'react'

import './Chat/chat.css'
import ChatHeader from './Chat/ChatHeader';
import ChatConversation from './Chat/ChatConversation';
import ChatMessage from './Chat/ChatMessage';

class Chatbot extends Component {
    render() {
        return (
            <div className='chatbot'>
                <div className='chat-content'>
                    <ChatHeader />
                    <ChatConversation />
                    <ChatMessage />
                </div>
            </div>
        )
    }
}

export default Chatbot