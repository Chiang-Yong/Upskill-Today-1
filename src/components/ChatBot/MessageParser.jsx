import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    const lowercasemessage = message.toLowerCase();
    if (lowercasemessage.includes('hello')) {
        actions.handleHello();
      }
      if (lowercasemessage.includes('hi')) {
        actions.handleHello();
      }

      if (lowercasemessage.includes('morning')) {
        actions.handleUSTmorning();
      }

      if (lowercasemessage.includes('afternoon')) {
        actions.handleUSTafternoon();
      }

      if (lowercasemessage.includes('evening')) {
        actions.handleUSTevening();
      }

      if (lowercasemessage.includes('upskill today')) {
        actions.handleUSTmsg();
      }

      if(lowercasemessage.includes('paid')){
        actions.handleUSTpaid();
      }

      if(lowercasemessage.includes('important')){
        actions.handleUSTimpt();
      }

      if(lowercasemessage.includes('period')){
        actions.handleUSTperiod();
      }

      if(lowercasemessage.includes('long')){
        actions.handleUSTperiod();
      }

      if(lowercasemessage.includes('program')){
        actions.handleUSTprogram();
      }

      if(lowercasemessage.includes('bond')){
        actions.handleUSTbond();
      }

      if(lowercasemessage.includes('training fee')){
        actions.handleUSTtrainingfee();
      }

      if(lowercasemessage.includes('fee')){
        actions.handleUSTfee();
      }

      if(lowercasemessage.includes('self-paced')){
        actions.handleUSTselfpaced();
      }

      if(lowercasemessage.includes('certificate')){
        actions.handleUSTcertificate();
      }

      if(lowercasemessage.includes('interested')){
        actions.handleUSTstart();
      }

      if(lowercasemessage.includes('register')){
        actions.handleUSTstart();
      }

      if(lowercasemessage.includes('virtual')){
        actions.handleUSTtrainingmode();
      }

      if(lowercasemessage.includes('onsite')){
        actions.handleUSTtrainingmode();
      }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;