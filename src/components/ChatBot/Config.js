import { createChatBotMessage } from 'react-chatbot-kit';

const botName = "ChatAI"
const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hi there! I'm ${botName}. How can I assist you today?`)],
};

export default config;