import React from 'react';

const USTmsg = "Upskill Today provides its trainees with a launch pad into a successful Developers."
const USTimpt = "Upskilling is important because it helps employees to contribute to develop and grow"
const USTpaid = "Selected consultants will learn while you earn during the Upskilling to deployment"
const USTbond = "Yes, it is one year"
const USTfee = "No, but there may be a commitment fee applicable"
const USTtrainingfee = "The training program is free, there may be a small administrative charge for Fast Track and Guided Track. For self-paced track, there is a monthly subscription fee of SGD99 per month."
const USTselfpaced ="For Self-paced Track*, the subscription fee is SGD99 per month. Currently, Self-paced track is available under Java Developer and JavaScript Developer tracks"
const USTtrainingmode = "This Upskilling program will be mostly in-class training plus some webinars where necessary. During COVID, the training will be virtual."
const USTselected = "Selected Consultants will be inducted into a Customer project while being mentored by our Expert Consultant."
const USTperiod = "Our Upskilling program will be 8 to 12 weeks, depending on the type of skills."
const USTcertificate = "Participants who have successfully demonstrated competence and meet/exceed this program deliverable will be sponsored for Industry Certifications."
const USTstart = "Go to Career Pathway and register your interest via online form."
const USTmorning = "Good Morning! How can I assist you today?"
const USTafternoon = "Good Afternoon!, Nice to meet you. What can I assist you today?"
const USTevening = "Good Evening! I'm ChatAI. Nice to meet you."
const USTprogram = "There are 2 program tracks, Guided Track and Self-paced Track"

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };

      const handleUSTmsg = () => {
        const botMessage = createChatBotMessage(USTmsg);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTimpt = () => {
        const botMessage = createChatBotMessage(USTimpt);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTpaid = () => {
        const botMessage = createChatBotMessage(USTpaid);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTbond = () => {
        const botMessage = createChatBotMessage(USTbond);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTfee = () => {
        const botMessage = createChatBotMessage(USTfee);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTtrainingfee = () => {
        const botMessage = createChatBotMessage(USTtrainingfee);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTselfpaced = () => {
        const botMessage = createChatBotMessage(USTselfpaced);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTtrainingmode = () => {
        const botMessage = createChatBotMessage(USTtrainingmode);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTselected = () => {
        const botMessage = createChatBotMessage(USTselected);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTperiod = () => {
        const botMessage = createChatBotMessage(USTperiod);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTcertificate = () => {
        const botMessage = createChatBotMessage(USTcertificate);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));

    }

    const handleUSTstart = () => {
        const botMessage = createChatBotMessage(USTstart);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    }

    const handleUSTmorning = () => {
      const botMessage = createChatBotMessage(USTmorning);
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
  }

  const handleUSTafternoon = () => {
    const botMessage = createChatBotMessage(USTafternoon);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
}

const handleUSTevening = () => {
  const botMessage = createChatBotMessage(USTevening);

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
}

const handleUSTprogram = () => {
  const botMessage = createChatBotMessage(USTprogram);

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
}

    
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            
          actions: {handleHello,handleUSTmsg,handleUSTbond, 
            handleUSTcertificate, handleUSTfee, handleUSTimpt, 
            handleUSTpaid, handleUSTperiod,handleUSTselected, 
            handleUSTselfpaced, handleUSTstart, handleUSTtrainingfee, 
            handleUSTtrainingmode, handleUSTmorning, handleUSTafternoon, 
            handleUSTevening, handleUSTprogram}
          
        });
      })}
    </div>
  );
};

export default ActionProvider;