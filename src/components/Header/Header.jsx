import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="chatbot-header">
            <p className="chatbot-header-inner name">Wizard Lowbot</p>
            <p className="chatbot-header-inner status">Active</p>
        </div>
    )
}

export default Header;