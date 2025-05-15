import React from 'react'
import ChatMessage from '@/components/shared/chatbox/chatmessage'
import ChatHeader from '@/components/shared/chatbox/chatheader'
import ChatFooter from '@/components/shared/chatbox/chatfooter'
import ChatSidebar from '@/components/shared/chatbox/chatsidebar'


const ChatBox = () => {
  return (

    <div className="chat-page">
      <ChatSidebar />
      <div className="chat-content">
        <ChatHeader />
        <ChatMessage />
        <ChatFooter />
      </div>
    </div>
  )
}

export default ChatBox