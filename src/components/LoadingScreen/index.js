import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { darkTheme } from '../../utils/Themes';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingContent = styled.div`
  text-align: center;
  color: ${darkTheme.text_primary};
`;

const Logo = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin-bottom: 2rem;
  animation: ${pulse} 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: clamp(1.5rem, 4vw, 2rem);
  display: flex;
  gap: 12px;
  color: ${darkTheme.text_primary};
  line-height: 1.4;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    gap: 8px;
  }
`;

const Span = styled.span`
  color: ${darkTheme.primary};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProgressBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 2rem;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LoadingContent>
        <Logo
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
        >
          R
        </Logo>
        
        <TextLoop>
          I am a
          <Span>
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
                deleteSpeed: 30,
              }}
            />
          </Span>
        </TextLoop>

        <ProgressBar
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ProgressFill
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2.5, 
              ease: "easeInOut",
              delay: 0.7 
            }}
          />
        </ProgressBar>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default LoadingScreen;