import React from "react";
// import { botMessage } from "react-chatbot-kit/build/src/components/Chat/chatUtils";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    // Response to "hello"
    const handleHello = () => {
        /* Bot response */
        const botMessage = createChatBotMessage("Hello ^^!\n What can I do for you today", {widget: "options"});

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // Response to "bye"
    const handleBye = () => {
        const botMessage = createChatBotMessage("Sad to see you leave 😥, but all better things must finish now or later. Good Bye! 😊!");

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    // Response to "time"
    const handleTime = () => {

        // Transform time in 24h format to 12h format
        const getEnglishTime = () => {

            let date = new Date();
            let hours = date.getHours(), 
            minutes = date.getMinutes();

            let moment = (hours < 12) ? "AM":"PM";

            return `${hours % 12}:${minutes < 10 ? "0"+minutes : minutes} ${moment}`
        }
        

        const botMessage = createChatBotMessage(`It's ${getEnglishTime()}`, {widget: "options"});

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    // Indicate user the possibilities
    const handleDescribeBot = () => {
        const botMessage = createChatBotMessage(`I'm Lowbot 🤖, a prototype of chatbot reused by Loick for his personal React project? Try ask me "time", "hello", "bye". Sorry for my current options, I'm a ChatBot V1 for my reuser! Later I will be able to help you really in a specific area ^^! It's a promise`, {widget: "options"});

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    // Give client current location (latitude, longitude)
    const handleUserLocation = () => {

        const authorize = (position) => {
            const { latitude, longitude } = position.coords;
            console.log(position);
            const botMessage = createChatBotMessage(`Latitude: ${latitude}\nLongitude: ${longitude}, try this data on a Map. Close this tab and run it again if you wanted to DENY!`, {widget: "options"});
            
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
            navigator.geolocation.clearWatch(id);
        }

        const deny = (positionError) => {
            console.log(positionError);
            
            const botMessage = createChatBotMessage("OK! I respect your choice! Close this tab and run it again if you wanted to ACCEPT!", {widget: "options"});

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        };

        navigator.geolocation.getCurrentPosition(authorize, deny);

        return;
    }

    // Process undefined requests
    const handleError = () => {
        const botMessage = createChatBotMessage(`Sorry, this request is out of my capacities 🌕! Instead try "time", say "hello" or "bye"`, {widget: "options"});

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