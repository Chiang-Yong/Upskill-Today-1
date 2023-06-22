const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const ChatBotMessageSchema = new Schema({
  userinput:{type: String, required: true},
  chatanswer: {type: String, required: true},  
  },
  {timestamps:true}
);

const ChatBotModel = model('ChatBotMessages', ChatBotMessageSchema);

module.exports = ChatBotModel;