import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../components/DogPicture";

const botName = "LowBot";

const config = {
    // Bot first messages
    initialMessages: [createChatBotMessage(`Hello! I'm a ${botName} to help you.Before that, let's exchange a little?`)],
    botName: botName,
    // Apply your own styles
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
    widgets: [
        {
            widgetName: "dogPicture",
            widgetFunc: (props) => < DogPicture {...props} />,
        },
    ],
};

export default config;