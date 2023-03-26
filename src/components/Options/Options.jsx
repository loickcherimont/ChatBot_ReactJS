import React from "react";
import "./Options.css";

const Options = (props) => {
    // Possibilities for ChatBot
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