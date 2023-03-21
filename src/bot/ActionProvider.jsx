import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        /* Bot response */
        const botMessage = createChatBotMessage("Hello ^^!\n What can I do for you today", {widget: "options"});

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleDescribeBot = () => {
        const botMessage = createChatBotMessage(`I'm a bot here to help you, I was created by Fredrik Oseberg and used again by Loick for his personal React project? If you want time write "time"`, {widget: "options"});

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleUserLocation = () => {
        // const botMessage = createChatBotMessage([{widget: "userLocation"}]);
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const botMessage = createChatBotMessage(`Latitude: ${latitude}\nLongitude: ${longitude}`);
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        }, (positionError) => {
            console.log(positionError);
            const botMessage = createChatBotMessage("OK! I respect your choice!");
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        })


    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleDescribeBot,
                        handleUserLocation
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;