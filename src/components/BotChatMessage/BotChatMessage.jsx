import React from "react";
import { getEnglishTime } from "../../functions/utils.js";
import "./BotChatMessage.css";

const BotChatMessage = (props) => {
    return (
        <div className="bot-chat-message">
            <p className="bot-chat-message-container">
                {props.message}
            </p>
            <p className="bot-chat-message-hour">
                {getEnglishTime()}
            </p>
        </div>
    )
}

export default BotChatMessage;