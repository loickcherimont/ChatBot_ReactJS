import React from "react";

const MessageParser = ( { children, actions }) => { 

    const parse = (message) => {

        // Response to user's greetings
        let regex = new RegExp("hello", "i");
        if(regex.test(message)) {
            actions.handleHello();
            return;
        }

        // Response to user
        // if time asked
        regex = new RegExp("time", "i");
        if(regex.test(message)) {
            actions.handleTime();
            return;

        }

        // Response if user say bye
        regex = new RegExp("bye", "i");
        if(regex.test(message)) {
            actions.handleBye();
            return;

        }

        else {
            actions.handleError();
            return;
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