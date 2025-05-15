import React from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import ChatBox from '@/components/shared/chatbox';

const SendMessage = () => {
 return (
        <>
            <InnerLayout headerButtons={<HeaderButtons group="message" />}>
                <ChatBox />
            </InnerLayout>
           
        </>
    )
}

export default SendMessage
