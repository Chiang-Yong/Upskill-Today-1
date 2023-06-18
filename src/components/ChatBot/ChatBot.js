import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      const newMessage = {
        sender: 'user',
        content: userInput
      };
  
      setMessages([...messages, newMessage]);
      setUserInput('');
  
      try {
        const response = await axios.post('https://backend-server-theta.vercel.app/api/chatbot', {
          message: userInput
        });
  
        const chatbotResponse = {
          sender: 'chatbot',
          content: response.data.message
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
  
    let chatbotResponse = '';
  
    if (userInput.includes('hello')) {
      chatbotResponse = 'Hi there! How can I assist you today?';
    } else if (userInput.includes('weather')) {
      // Call weather API or fetch weather information
      // You can use axios or any other library to make API requests
      const weatherResponse = await axios.get('https://backend-server-theta.vercel.app/api/weather');
      const temperature = weatherResponse.data.temperature;
      const weatherDescription = weatherResponse.data.weather_description;
  
      chatbotResponse = `The current temperature is ${temperature}°C. ${weatherDescription}.`;
    } else {
      chatbotResponse = "I'm sorry, but I didn't understand that. Can you please rephrase your question?";
    }
  
    return chatbotResponse;
  };
  
  
  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender === 'user' ? (
              <div>{message.content}</div>
            ) : (
              <div>{message.content}</div>
            )}
          </div>
        ))}
      </div>
      <Form>
        <Form.Control
          type="text"
          placeholder="Type your message"
          value={userInput}
          onChange={handleInputChange}
        />
        <Button variant="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Form>
    </div>
  );
  
  
            }
export default ChatBot;
