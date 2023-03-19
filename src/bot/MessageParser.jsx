import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const MessageParser = ( { children, actions }) => {
    const parse = (message) => {
        let regex = new RegExp("hello", "i");
        if(regex.test(message)) {
            actions.handleHello();
        }

        regex = new RegExp("dog", "i");
        if (regex.test(message)) {
            actions.handleDog()
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