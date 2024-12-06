import React from 'react';
import Widget from 'rasa-webchat';
import './chatbotStyles.css';  

const ChatbotWidget = () => {
    return (
        <div className="chatbot-widget">
            <Widget
                initPayload="/greet"
                socketUrl={process.env.REACT_APP_RASA_URL}  // Rasa backend URL from .env file
                socketPath="/socket.io/"
                title="Bail Assistant Chatbot"
                subtitle="Ask about bail-related queries"
                customData={{ language: "en" }}  // Custom data for Rasa (optional)
                showCloseButton={true}
                fullScreenMode={false}
                badge={true}
                customStyles={{
                    botMessageBox: { backgroundColor: "#0d6efd" },
                    chatButton: { backgroundColor: "#0d6efd" }
                }}
            />
        </div>
    );
};

export default ChatbotWidget;
