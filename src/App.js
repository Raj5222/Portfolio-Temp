import React, { useState, useEffect, Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import './App.css';

// Lazy load components for better performance
const HeroSection = lazy(() => import("./components/HeroSection"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate initial loading and check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: '#090917',
        color: '#F2F3F4',
        fontSize: '18px'
      }}>
        Something went wrong. Please refresh the page.
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <AnimatePresence mode="wait">
            {loading ? (
              <LoadingScreen key="loading" />
            ) : (
              <motion.div
                key="main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
                <Body>
                  <Suspense fallback={<LoadingFallback>Loading section...</LoadingFallback>}>
                    <HeroSection />
                    <Wrapper>
                      <Skills />
                      <Experience />
                    </Wrapper>
                    <Projects openModal={openModal} setOpenModal={setOpenModal} />
                    <Wrapper>
                      <Education />
                      <Contact />
                    </Wrapper>
                    <Footer />
                    {openModal.state && (
                      <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                    )}
                  }
                  </Suspense>
                </Body>
              </motion.div>
            )}
          </AnimatePresence>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;