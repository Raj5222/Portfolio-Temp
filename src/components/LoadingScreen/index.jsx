import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const LoadingContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 2rem;
`;

const LoadingText = styled.div`
  font-weight: 600;
  font-size: clamp(1.5rem, 4vw, 2rem);
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  text-align: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const LoadingSpan = styled.div`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.primary}30;
  border-top: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <LoadingText>
        I am a
        <LoadingSpan>
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Backend Developer", 
                "Frontend Developer",
                "Programmer"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </LoadingSpan>
      </LoadingText>
    </LoadingContainer>
  );
};

export default LoadingScreen;