import React from "react";

/**
 * Returns the response corresponding to the action
 * 
 * @param children
 * @param actions 
 * @returns {HTMLDivElement} Response corresponding to the action
 */
const MessageParser = ( { children, actions }) => { 

    const parse = (message) => {

        /**
         * Response
         * For greetings
         */
        let regex = new RegExp("hello", "i");
        if(regex.test(message)) {
            actions.handleHello();
            return;
        }

        /**
         * Response
         * For time
         */
        regex = new RegExp("time", "i");
        if(regex.test(message)) {
            actions.handleTime();
            return;

        }

        /**
         * Response 
         * for bye
         */
        regex = new RegExp("bye", "i");
        if(regex.test(message)) {
            actions.handleBye();
            return;

        }

        /**
         * Response
         * For not valid request
         */
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