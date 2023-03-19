import React from "react";
// Chat bot dependencies
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css"
// Chat bot initializer
import config from "./bot/config";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";



function App() {
  return (
    <div>
      <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}

export default App;
