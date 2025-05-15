import { Avatar } from 'antd';
import React from 'react';

const ChatMessage = () => {
    return (
        <>
            <div className="chat-body">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-11 col-lg-10 col-xl-8 col-xxl-6">
                        <div className="d-flex">
                            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" size={45} />
                            <div className="message-card ms-3">
                                <div className="message-text">
                                    ABDUL JABBAR studying in X 2024-2025 is present on 11 - Apr 5:52 AM
                                </div>
                                <div className="message-time">Apr 11</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-12 col-sm-12 col-md-11 offset-md-1 col-lg-10 offset-lg-2 col-xl-8 offset-xl-4 col-xxl-6 offset-xxl-6">
                        <div className="d-flex">
                            <div className="message-card me-3">
                                <div className="message-text">
                                    ABDUL JABBAR studying in X 2024-2025 is present on 11 - Apr 5:52 AM
                                </div>
                                <div className="message-time">Apr 11</div>
                            </div>
                            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" size={45} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatMessage;