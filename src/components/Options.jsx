import React from "react";

const Options = (props) => {
    console.log(props);
    const options = [
        {
            text: "Who are you?",
            handler: props.actionProvider.handleDescribeBot,
            id: 1,
        },
        {
            text: "Where am I?",
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