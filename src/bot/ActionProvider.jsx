import React from "react";
import { getEnglishTime } from "../functions/utils.js";
import { CurrentLocation } from "../components/CurrentLocation.jsx";

/**
 * Returns the action asked by User
 * 
 * @param createChatBotMessage
 * @param setState
 * @param children
 * @returns {HTMLDivElement} Action asked by User
 */
const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    
    const handleHello = () => {

        const botMessage = createChatBotMessage("Hello ^^!\n What can I do for you today", { widget: "options" });


        displayMessage(botMessage);
    };

    const handleBye = () => {
        const botMessage = createChatBotMessage("Sad to see you leave 😥, but all better things must finish now or later. Good Bye! 😊!");


        displayMessage(botMessage);

    }

    /**
     * Display time
     * if user ask it
     */
    const handleTime = () => {
        const botMessage = createChatBotMessage(`It's ${getEnglishTime()}`, { widget: "options" });

        displayMessage(botMessage);
    }

    /**
     * Bot introduce itself
     * Display all options too
     */
    const handleDescribeBot = () => {
        const botMessage = createChatBotMessage(`I'm Lowbot, a prototype of chatbot reused by Loick for his personal React project? Try ask me "time", "hello", "bye". Sorry for my current options, I'm a ChatBot V1 for my reuser! Later I will be able to help you really in a specific area ^^! It's a promise`, { widget: "options" });


        displayMessage(botMessage);

    }


    /**
     * If user agree
     * Give his/her current location
     * Using longitude and latitude
     */
    const handleUserLocation = () => {

        const authorize = (position) => {

            const { latitude, longitude } = position.coords;
            const botMessage = createChatBotMessage(<CurrentLocation latitude={latitude} longitude={longitude} />, {widget: 'options'})

            displayMessage(botMessage);

        }

        const deny = () => {

            const botMessage = createChatBotMessage("OK! I respect your choice! Close this tab and run it again if you wanted to ACCEPT!", { widget: "options" });

            displayMessage(botMessage);

        };

        navigator.geolocation.getCurrentPosition(authorize, deny);

        return;
    }

    /**
     * Process undefined requests
     * Empty ones too
     */
    const handleError = () => {
        const botMessage = createChatBotMessage(`Sorry, this request is out of my capacities 🌕! Instead try "time", say "hello", "bye" or select one of these options`, { widget: "options" });

        displayMessage(botMessage);

    }

    /**
     * Display previous and new messages
     * 
     * @param botMessage 
     */
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