import React, {useState} from 'react'
import ChatBot from "./ChatBot"

const ChatBotButton = () => {
    const [isChatbotActive, setIsChatbotActive] = useState(false);
    const activateChatbot = () => {
        setIsChatbotActive(true);
      };
      
      return (
        <div>
          {/* Render your component elements here */}
      
          {isChatbotActive ? (
            <ChatBot />
          ) : (
            <button onClick={activateChatbot}>Need help?</button>
          )}
        </div>
      );
      
}

export default ChatBotButton