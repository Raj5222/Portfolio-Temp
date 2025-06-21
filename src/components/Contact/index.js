import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import { Connect_URL, Pass } from "../../utils/Themes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
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
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 90vw;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 85vw;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #000 + 99;
  padding: 32px;
  border-radius: 16px;
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  min-width: 100%;
  max-width: 100%;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isButtonValue, setButtonValue] = useState("Send");
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

  const handleSubmit = (e) => {
    setButtonDisabled(true);
    setButtonValue("Sending...");
    e.preventDefault();

    fetch(Connecting_URL.URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData),
    }).then(
      () => {
        console.log("Send Successfully");
        setButtonValue("Send Successfully");
        setTimeout(() => {
          setButtonDisabled(false);
          setButtonValue("Send");
        }, 2000);
        setFormData({ email: "", name: "", subject: "", message: "" });
        setOpen(true);
      },
      (error) => {
        console.log(error.text);
        setButtonValue("Sending Failed");
        setTimeout(() => {
          setButtonDisabled(false);
          setButtonValue("Send Again");
        }, 2000);
      }
    );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Connect</Title>
        <Desc id="Connect">
          Feel free to connect with me if you need help, have questions, or any
          potential opportunities.
        </Desc>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Let{"'"}s Connect..🚀</ContactTitle>
          <ContactInput
            placeholder="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <ContactInput
            placeholder="Your Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <ContactInput
            placeholder="Subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <ContactButton
            type="submit"
            value={isButtonValue}
            disabled={isButtonDisabled}
          />
        </ContactForm>

        <Snackbar
          style={{
            position: "fixed",
            top: "20%",
            left: 0,
            transform: "translateY(-50%)",
            zindex: 1300,
          }}
          open={open}
          autoHideDuration={5000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "center", horizontal: "left" }}
          message="Sent Successfully"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
