import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        // Bot response
        const botMessage = createChatBotMessage("Hello! Nice to meet you");

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleDog = () => {
        const botMessage = createChatBotMessage(
            "Here's a nice dog picture for you!", { widget: "dogPicture"}
        )

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleTime = () => {
        let hours = new Date().getHours(),
            minutes = new Date().getMinutes();

        const botMessage = createChatBotMessage(`It's ${hours}:${minutes}`);

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleDescribeBot = () => {
        const botMessage = createChatBotMessage(`I'm a bot here to help you, I was created by Fredrik Oseberg and used again by Loick for his personal React project!`);

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleUserLocation = () => {
        // Access if user accepts to its location
    }

    // Where user is?

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleDog,
                        handleTime,
                        handleDescribeBot,
                        handleUserLocation
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;