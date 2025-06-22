import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 70%);
    z-index: -1;
  }
`;

const ErrorTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
`;

const ErrorMessage = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  margin-bottom: 2.5rem;
  max-width: 600px;
  line-height: 1.7;
  color: #e0e6ed;
  font-family: 'Inter', sans-serif;
`;

const RetryButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  color: white;
  border: none;
  padding: 18px 36px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%);
    transition: left 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 107, 107, 0.4);
  }
`;

const ErrorIcon = styled(motion.div)`
  font-size: 5rem;
  margin-bottom: 2rem;
  color: #ff6b6b;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorIcon
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            ⚠️
          </ErrorIcon>
          
          <ErrorTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Oops! Something went wrong
          </ErrorTitle>
          
          <ErrorMessage
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're sorry, but something unexpected happened. Don't worry, it's not your fault! 
            Please try refreshing the page to get back on track.
          </ErrorMessage>
          
          <RetryButton 
            onClick={() => window.location.reload()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Refresh Page
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;