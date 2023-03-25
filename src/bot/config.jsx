import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../components/BotAvatar/BotAvatar";
import Options from "../components/Options/Options";

const botName = "LowBot";

const config = {
    // Bot first messages
    initialMessages: [createChatBotMessage(`Hi, I'm ${botName}`, {
        widget: "options",
    })],
    botName: botName,
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props}/>
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