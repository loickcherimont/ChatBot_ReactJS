import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options";

const botName = "LowBot";

const config = {
    // Bot first messages
    initialMessages: [createChatBotMessage(`Hi, I'm ${botName}`, {
        widget: "options",
    })],
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
    customComponents: {
        // botAvatar: (props) => <MyAvatar {...props} />
    },
    state: {
        gist: "",
        infoBox: "",
    },
    // widgets: [
    //     {
    //         widgetName: "dogPicture",
    //         widgetFunc: (props) => < DogPicture {...props} />,
    //     },
    // ],
    widgets : [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
            mapStateToProps: ["gist", "infoBox"],
        },
    ]
};

export default config;