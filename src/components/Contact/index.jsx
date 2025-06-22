
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Snackbar, Alert } from "@mui/material";
import { Connect_URL, Pass, fadeInUp, staggerContainer } from "../../utils/Themes";

const Container = styled.section`
  position: relative;
  z-index: 1;
  padding: 120px 0;
  background: ${({ theme }) => theme.bg};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 30% 20%, ${({ theme }) => theme.primary}15 0%, transparent 40%),
      radial-gradient(circle at 70% 80%, ${({ theme }) => theme.secondary}15 0%, transparent 40%);
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 24px;
  background: ${({ theme }) => theme.gradient_primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactForm = styled(motion.form)`
  width: 100%;
  max-width: 700px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  padding: 48px;
  box-shadow: ${({ theme }) => theme.shadow};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradient_primary};
    border-radius: 24px 24px 0 0;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.glow};
    border-color: ${({ theme }) => theme.primary}50;
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
`;

const FormSubtitle = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.1rem;
  line-height: 1.6;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
    background: ${({ theme }) => theme.card_hover};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary}80;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 140px;
  padding: 16px 20px;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
    background: ${({ theme }) => theme.card_hover};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary}80;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 18px;
  background: ${({ theme }) => theme.gradient_primary};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin-top: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient_secondary};
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 212, 255, 0.4);
    
    &::before {
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
  const [isButtonValue, setButtonValue] = useState("Send Message 🚀");
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
    setButtonValue("Sending... ✈️");

    try {
      const response = await fetch(Connecting_URL.URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setButtonValue("Message Sent! ✅");
        setAlertSeverity("success");
        setAlertMessage("Thank you! Your message has been sent successfully. I'll get back to you soon!");
        setFormData({ email: "", name: "", subject: "", message: "" });
        setOpen(true);
        
        setTimeout(() => {
          setButtonDisabled(false);
          setButtonValue("Send Message 🚀");
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setButtonValue("Failed to Send ❌");
      setAlertSeverity("error");
      setAlertMessage("Oops! Failed to send message. Please try again later.");
      setOpen(true);
      
      setTimeout(() => {
        setButtonDisabled(false);
        setButtonValue("Try Again 🚀");
      }, 3000);
    }
  };

  return (
    <Container id="connect" ref={ref}>
      <Wrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <HeaderSection>
            <motion.div variants={fadeInUp}>
              <Title>Let's Connect</Title>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Subtitle>
                Have a project in mind or just want to say hello? I'd love to hear from you!
              </Subtitle>
            </motion.div>
          </HeaderSection>

          <ContactForm
            variants={fadeInUp}
            onSubmit={handleSubmit}
            whileHover={{ scale: 1.01 }}
          >
            <FormHeader>
              <FormTitle>Get In Touch 💬</FormTitle>
              <FormSubtitle>
                Fill out the form below and I'll get back to you as soon as possible
              </FormSubtitle>
            </FormHeader>

            <FormGrid>
              <InputGroup>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputGroup>

              <InputGroup className="full-width">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </InputGroup>

              <InputGroup className="full-width">
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </FormGrid>

            <SubmitButton
              type="submit"
              disabled={isButtonDisabled}
              whileHover={{ scale: isButtonDisabled ? 1 : 1.02 }}
              whileTap={{ scale: isButtonDisabled ? 1 : 0.98 }}
            >
              {isButtonValue}
            </SubmitButton>
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
              sx={{ width: '100%', borderRadius: '12px' }}
            >
              {alertMessage}
            </Alert>
          </Snackbar>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Contact;
