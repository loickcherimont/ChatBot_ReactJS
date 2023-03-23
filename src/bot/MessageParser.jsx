import React from "react";
// import { createClientMessage } from "react-chatbot-kit";

const MessageParser = ( { children, actions }) => {
    const parse = (message) => {
        // Response to user's greetings
        let regex = new RegExp("hello", "i");
        if(regex.test(message)) {
            actions.handleHello();
            return;
        }

        regex = new RegExp("time", "i");
        if(regex.test(message)) {
            actions.handleTime();
            return;

        }

        regex = new RegExp("bye", "i");
        if(regex.test(message)) {
            actions.handleBye();
            return;

        }

        else {
            actions.handleError();
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