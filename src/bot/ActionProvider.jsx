import React from "react";
import { getEnglishTime } from "../functions/utils.js";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    // Response to "hello"
    const handleHello = () => {

        const botMessage = createChatBotMessage("Hello ^^!\n What can I do for you today", { widget: "options" });


        displayMessage(botMessage);
    };

    // Response to "bye"
    const handleBye = () => {
        const botMessage = createChatBotMessage("Sad to see you leave 😥, but all better things must finish now or later. Good Bye! 😊!");


        displayMessage(botMessage);

    }

    // Response to "time"
    const handleTime = () => {
        const botMessage = createChatBotMessage(`It's ${getEnglishTime()}`, { widget: "options" });

        displayMessage(botMessage);
    }

    // Indicate user the possibilities
    const handleDescribeBot = () => {
        const botMessage = createChatBotMessage(`I'm Lowbot, a prototype of chatbot reused by Loick for his personal React project? Try ask me "time", "hello", "bye". Sorry for my current options, I'm a ChatBot V1 for my reuser! Later I will be able to help you really in a specific area ^^! It's a promise`, { widget: "options" });


        displayMessage(botMessage);

    }

    // Give client current location (latitude, longitude)
    // if user agree
    const handleUserLocation = () => {

        const authorize = (position) => {
            const { latitude, longitude } = position.coords;

            const botMessage = createChatBotMessage(`Latitude: ${latitude}\nLongitude: ${longitude}, try this data on a Map. Close this tab and run it again if you wanted to DENY!`, { widget: "options" });


            displayMessage(botMessage);

        }

        const deny = () => {

            const botMessage = createChatBotMessage("OK! I respect your choice! Close this tab and run it again if you wanted to ACCEPT!", { widget: "options" });


            displayMessage(botMessage);

        };

        navigator.geolocation.getCurrentPosition(authorize, deny);

        return;
    }

    // Process undefined requests
    // Empty ones too
    const handleError = () => {
        const botMessage = createChatBotMessage(`Sorry, this request is out of my capacities 🌕! Instead try "time", say "hello", "bye" or select one of these options`, { widget: "options" });


        displayMessage(botMessage);

    }

    // Display messages : previous and new ones
    function displayMessage(botMessage) {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleDescribeBot,
                        handleUserLocation,
                        handleBye,
                        handleTime,
                        handleError,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;