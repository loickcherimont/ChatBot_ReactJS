import React from "react";
import "./Options.css";

/**
 * Returns all possibilities with the bot
 * 
 * @param props 
 * @returns {HTMLDivElement} All actions possible with the bot 
 */
const Options = (props) => {
    const options = [
        {
            text: "Who am I?",
            handler: props.actionProvider.handleDescribeBot,
            id: 1,
        },
        {
            text: "User location",
            handler: props.actionProvider.handleUserLocation,
            id: 2,
        }

    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">
        {buttonsMarkup}
    </div>;
}

export default Options;