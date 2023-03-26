import React from "react";
import { getEnglishTime } from "../../functions/utils.js";
import "./UserChatMessage.css";

const UserChatMessage = (props) => {
    return (
        <div className="user-chat-message">
            <p className="user-chat-message-container">
                {props.message}
            </p>
            <p className="user-chat-message-hour">
                {getEnglishTime()}
            </p>
        </div>
    )
}

export default UserChatMessage;