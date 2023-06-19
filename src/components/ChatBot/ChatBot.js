import React, { useState, useEffect } from "react";
import { Form, Button, Container, Image, } from "react-bootstrap";
import axios from "axios";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { FiMessageSquare } from "react-icons/fi";
import LetChat from "../../images/LetChat.gif"


const cbStyle = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "-1000px",
    zIndex: 100,
  },

  chatbotIcon:{
    position: "fixed",
    bottom: "0px",
    right: "50px",
    zIndex: 102,
    fontSize: "25px",
    color: "#ff7b00",
    cursor: "pointer",
    height:"50px",
    width:"50px",
  },

  chatbotCloseBtn:{
    position:"absolute",
    top: "10px",
    right: "10px",
    background: "none",
    cursor:"pointer",
    fontSize: "16px",
  }
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const handleToggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleChatboxClose = () => {
    setIsChatboxOpen(false);
  };

  {/* 
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isChatboxOpen && !event.target.closest('.chatbox')) {
        setIsChatboxOpen(false);
      }
    };
  
    window.addEventListener('click', handleOutsideClick);
  
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isChatboxOpen]);
  */}

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() !== "") {
      const newMessage = {
        sender: "user",
        content: userInput,
      };

      setMessages([...messages, newMessage]);
      setUserInput("");

      try {
        const response = await axios.post(
          "https://backend-server-theta.vercel.app/api/chatbot",
          {
            message: userInput,
          }
        );

        const chatbotResponse = {
          sender: "chatbot",
          content: response.data.message,
        };

        setMessages([...messages, chatbotResponse]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const generateChatbotResponse = async (userInput) => {
    // Perform your custom logic to generate chatbot response
    // You can use conditional statements, switch statements, or any other approach

    let chatbotResponse = "";

    if (userInput.includes("hello")) {
      chatbotResponse = "Hi there! How can I assist you today?";
    } else if (userInput.includes("weather")) {
      // Call weather API or fetch weather information
      // You can use axios or any other library to make API requests
      const weatherResponse = await axios.get(
        "https://backend-server-theta.vercel.app/api/weather"
      );
      const temperature = weatherResponse.data.temperature;
      const weatherDescription = weatherResponse.data.weather_description;

      chatbotResponse = `The current temperature is ${temperature}°C. ${weatherDescription}.`;
    } else {
      chatbotResponse =
        "I'm sorry, but I didn't understand that. Can you please rephrase your question?";
    }

    return chatbotResponse;
  };

  return (
    <div>
      {/*   <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender === "user" ? (
              <div>{message.content}</div>
            ) : (
              <div>{message.content}</div>
            )}
          </div>
        ))}
      </div> */}
      {/*    <Form>
        <Form.Control
          type="text"
          placeholder="Type your message"
          value={userInput}
          onChange={handleInputChange}
        />
        <Button variant="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Form> */}
      <Container style={cbStyle.container}>
        {isChatboxOpen ? (
          // Render chatbox when isChatboxOpen is true
          <>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            className="chatbox"
          />
          <Button className="close-button" onClick={handleChatboxClose}>
            Close
          </Button>
          </>
        ) : (
          // Render chatbot icon when isChatboxOpen is false
          <div className="chatbot-icon fs-3" onClick={handleToggleChatbox}>
          {/* <FiMessageSquare style={cbStyle.chatbotIcon}/> */}
            <Image 
            src={LetChat}
            alt="Let Chat"
            height="64px"
            width="64px"
            background="none"
            style={cbStyle.chatbotIcon}
        />
          </div>
        )}
      </Container>
    </div>
  );
};
export default ChatBot;
