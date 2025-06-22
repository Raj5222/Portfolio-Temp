import { ThemeProvider } from "styled-components";
import { useState, useEffect, Suspense, lazy } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import ErrorBoundary from "./components/ErrorBoundary";

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
  background: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(69, 183, 209, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }
`

const Wrapper = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 107, 107, 0.05) 0%, 
    rgba(78, 205, 196, 0.05) 50%, 
    rgba(69, 183, 209, 0.05) 100%);
  width: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b6b' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }
`

const LoadingContainer = styled.div`
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 3rem;
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
    animation: pulse 3s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`

const LoadingText = styled.div`
  font-weight: 700;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  display: flex;
  gap: 15px;
  color: #ffffff;
  line-height: 1.2;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`

const LoadingSpan = styled.div`
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

const LoadingSpinner = styled(motion.div)`
  width: 80px;
  height: 80px;
  border: 4px solid rgba(255, 107, 107, 0.2);
  border-top: 4px solid #ff6b6b;
  border-right: 4px solid #4ecdc4;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid transparent;
    border-top: 2px solid #45b7d1;
    border-radius: 50%;
    animation: spin 1.5s linear infinite reverse;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const ComponentLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.2rem;
  font-weight: 500;
`

const ThemeToggle = styled(motion.button)`
  position: fixed;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  z-index: 1000;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  color: ${({ theme }) => theme.text_primary};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    background: ${({ theme }) => theme.card_hover};
    box-shadow: ${({ theme }) => theme.glow};
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: 768px) {
    right: 20px;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`

const FloatingElements = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  filter: blur(1px);
  opacity: 0.6;
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
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Floating elements data
  const floatingElements = [
    { id: 1, size: 20, color: 'rgba(255, 107, 107, 0.3)', x: '10%', y: '20%' },
    { id: 2, size: 15, color: 'rgba(78, 205, 196, 0.3)', x: '80%', y: '10%' },
    { id: 3, size: 25, color: 'rgba(69, 183, 209, 0.3)', x: '70%', y: '70%' },
    { id: 4, size: 18, color: 'rgba(150, 206, 180, 0.3)', x: '20%', y: '80%' },
    { id: 5, size: 22, color: 'rgba(252, 191, 73, 0.3)', x: '90%', y: '50%' },
  ];

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
                    "UI/UX Designer",
                    "Problem Solver"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </LoadingSpan>
          </LoadingText>
        </LoadingContainer>
      </ThemeProvider>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <Body>
            <FloatingElements>
              {floatingElements.map((element) => (
                <FloatingElement
                  key={element.id}
                  size={element.size}
                  color={element.color}
                  style={{ left: element.x, top: element.y }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6 + element.id,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </FloatingElements>

            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Suspense fallback={<ComponentLoader>Loading...</ComponentLoader>}>
                  <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
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
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? '☀️' : '🌙'}
            </ThemeToggle>
          </Body>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;