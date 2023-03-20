import React from "react";
// import { createClientMessage } from "react-chatbot-kit";

const MessageParser = ( { children, actions }) => {
    const parse = (message) => {
        // Response to user's greetings
        let regex = new RegExp("hello", "i");
        if(regex.test(message)) {
            actions.handleHello();
        }

        // Show user a random picture standing for a dog
        regex = new RegExp("dog", "i");
        if (regex.test(message)) {
            actions.handleDog();
        }

        regex = new RegExp("time", "i");
        if(regex.test(message)) {
            actions.handleTime();
        }
    };

    return (
        <div>
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        parse: parse,
                        actions,
                    });
            })}
        </div>
    );
};

export default MessageParser;