import React from "react";
// Chat bot dependencies
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
// Chat bot initializer
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
