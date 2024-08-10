import React from "react";
/**
 * Import all dependencies
 * Specific to use chatbot
 */
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

/**
 * Import all initializers
 * Default components for chatbot
 */
import config from "./bot/config";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";

import "./App.css";



function App() {
  return (
      <Chatbot
        className="wrapper-chatbot"
        config={config}
        headerText="Wizard Lowbot"
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
  )
}

export default App;
