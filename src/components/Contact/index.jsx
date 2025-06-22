import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Snackbar, Alert } from "@mui/material";
import { Connect_URL, Pass, fadeInUp, staggerContainer } from "../../utils/Themes";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 20px;

  @media (max-width: 960px) {
    padding: 60px 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  font-size: clamp(1rem, 2vw, 1.125rem);
  text-align: center;
  max-width: 90vw;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 1rem;
  }
`;

const ContactForm = styled(motion.form)`
  width: 85vw;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);
  padding: 32px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.primary}30;
  box-shadow: 0 8px 32px rgba(133, 76, 230, 0.15);
  margin-top: 28px;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 40px rgba(133, 76, 230, 0.25);
    border-color: ${({ theme }) => theme.primary}50;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid ${({ theme }) => theme.text_secondary}40;
  outline: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 14px 16px;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary}80;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid ${({ theme }) => theme.text_secondary}40;
  outline: none;
  min-width: 100%;
  max-width: 100%;
  min-height: 120px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 14px 16px;
  transition: all 0.3s ease;
  font-family: inherit;
  resize: vertical;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary}80;
  }
`;

const ContactButton = styled(motion.button)`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
  margin-top: 8px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(133, 76, 230, 0.4);
    
    &:before {
      left: 0;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isButtonValue, setButtonValue] = useState("Send Message");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const Connecting_URL = { URL: Connect_URL };
  if (window.raj === Pass) {
    window.Connect = Connecting_URL;
  }

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    setButtonValue("Sending...");

    try {
      const response = await fetch(Connecting_URL.URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setButtonValue("Message Sent!");
        setAlertSeverity("success");
        setAlertMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ email: "", name: "", subject: "", message: "" });
        setOpen(true);
        
        setTimeout(() => {
          setButtonDisabled(false);
          setButtonValue("Send Message");
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setButtonValue("Failed to Send");
      setAlertSeverity("error");
      setAlertMessage("Failed to send message. Please try again later.");
      setOpen(true);
      
      setTimeout(() => {
        setButtonDisabled(false);
        setButtonValue("Try Again");
      }, 3000);
    }
  };

  return (
    <Container id="connect" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Wrapper>
          <motion.div variants={fadeInUp}>
            <Title>Get In Touch</Title>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Desc>
              Feel free to reach out if you have any questions, opportunities, or just want to connect!
            </Desc>
          </motion.div>

          <ContactForm
            variants={fadeInUp}
            onSubmit={handleSubmit}
            whileHover={{ scale: 1.02 }}
          >
            <ContactTitle>Let's Connect 🚀</ContactTitle>
            
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <ContactInput
                id="name"
                placeholder="Your full name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <ContactInput
                id="email"
                placeholder="your.email@example.com"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="subject">Subject</Label>
              <ContactInput
                id="subject"
                placeholder="What's this about?"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <ContactInputMessage
                id="message"
                placeholder="Tell me more about your project or inquiry..."
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <ContactButton
              type="submit"
              disabled={isButtonDisabled}
              whileHover={{ scale: isButtonDisabled ? 1 : 1.02 }}
              whileTap={{ scale: isButtonDisabled ? 1 : 0.98 }}
            >
              {isButtonValue}
            </ContactButton>
          </ContactForm>

          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={() => setOpen(false)}
              severity={alertSeverity}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {alertMessage}
            </Alert>
          </Snackbar>
        </Wrapper>
      </motion.div>
    </Container>
  );
};

export default Contact;