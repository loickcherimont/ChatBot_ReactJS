import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../components/BotAvatar/BotAvatar";
import BotChatMessage from "../components/BotChatMessage/BotChatMessage";
// import ChatButton from "../components/ChatButton/ChatButton";
import Header from "../components/Header/Header";
import Options from "../components/Options/Options";
import UserChatMessage from "../components/UserChatMessage/UserChatMessage";

const config = {
    // Bot first messages
    initialMessages: [createChatBotMessage(`Hi, there, what can I do for you?`, {
        widget: "options",
    })],
    customComponents: {
        header: (props) => <Header {...props}/>,
        botAvatar: (props) => <BotAvatar {...props}/>,
        userChatMessage: (props) => <UserChatMessage {...props}/>,
        botChatMessage: (props) => <BotChatMessage {...props} />,
    },
    widgets : [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
            mapStateToProps: ["gist", "infoBox"],
        },
    ]
};

export default config;