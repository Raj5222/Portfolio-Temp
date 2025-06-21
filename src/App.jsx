import { ThemeProvider } from "styled-components";
import { useState, useEffect, Suspense, lazy } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from "styled-components";
import Typewriter from "typewriter-effect";

// Lazy load components for better performance
const Navbar = lazy(() => import("./components/Navbar"));
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
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

const LoadingContainer = styled.div`
  background: #090917;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 2rem;
`

const LoadingText = styled.div`
  font-weight: 600;
  font-size: clamp(1.5rem, 4vw, 2rem);
  display: flex;
  gap: 12px;
  color: #F2F3F4;
  line-height: 1.2;
  text-align: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`

const LoadingSpan = styled.div`
  color: #854CE6;
  cursor: pointer;
`

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(133, 76, 230, 0.3);
  border-top: 3px solid #854CE6;
  border-radius: 50%;
`

const ComponentLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: ${({ theme }) => theme.text_secondary};
`

const ThemeToggle = styled(motion.button)`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 1000;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 20px rgba(133, 76, 230, 0.3);
  
  @media (max-width: 768px) {
    right: 15px;
    width: 45px;
    height: 45px;
  }
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference
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

  if (loading) {
    return (
      <ThemeProvider theme={darkTheme}>
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
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Body>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Suspense fallback={<ComponentLoader>Loading...</ComponentLoader>}>
                <Navbar />
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
              </Suspense>
            </motion.div>
          </AnimatePresence>
          
          <ThemeToggle
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? '☀️' : '🌙'}
          </ThemeToggle>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;