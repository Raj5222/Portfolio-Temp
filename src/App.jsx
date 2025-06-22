
import { ThemeProvider } from "styled-components";
import { useState, useEffect, Suspense, lazy } from "react";
import { darkTheme, lightTheme } from './utils/Themes'
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from "styled-components";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const HeroSection = lazy(() => import("./components/HeroSection/index"));
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
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`

const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
`

const Sidebar = styled(motion.nav)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 280px;
  background: linear-gradient(180deg, 
    rgba(15, 23, 42, 0.95) 0%, 
    rgba(30, 41, 59, 0.95) 50%, 
    rgba(51, 65, 85, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(148, 163, 184, 0.1);
  z-index: 1000;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 2rem;
  margin-bottom: 3rem;
  
  img {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
  
  h2 {
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
  }
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`

const NavItem = styled(motion.li)`
  margin: 0.5rem 1.5rem;
`

const NavLink = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: ${props => props.active ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' : 'transparent'};
  border: none;
  border-radius: 12px;
  color: ${props => props.active ? '#ffffff' : '#94a3b8'};
  font-size: 0.95rem;
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  font-family: inherit;
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' : 'rgba(59, 130, 246, 0.1)'};
    color: #ffffff;
    transform: translateX(4px);
  }
  
  .icon {
    font-size: 1.2rem;
    min-width: 24px;
  }
`

const MainContent = styled.div`
  margin-left: 280px;
  width: calc(100% - 280px);
  min-height: 100vh;
  
  @media (max-width: 1024px) {
    margin-left: 0;
    width: 100%;
  }
`

const ContentSection = styled(motion.div)`
  min-height: 100vh;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const MobileMenuToggle = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 12px;
  padding: 12px;
  color: #ffffff;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: none;
  
  @media (max-width: 1024px) {
    display: block;
  }
`

const ThemeToggle = styled.button`
  margin: 1.5rem;
  padding: 12px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  color: #94a3b8;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(59, 130, 246, 0.2);
    color: #ffffff;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.1rem;
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const sections = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects openModal={openModal} setOpenModal={setOpenModal} />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <Body>
            <MainContainer>
              <MobileMenuToggle onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? '✕' : '☰'}
              </MobileMenuToggle>

              <Sidebar
                isOpen={sidebarOpen}
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Logo>
                  <img src="/Raj-logo.jpg" alt="Raj Sathvara" />
                  <h2>Raj Sathvara</h2>
                </Logo>

                <NavList>
                  {sections.map((section, index) => (
                    <NavItem
                      key={section.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        active={activeSection === section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          setSidebarOpen(false);
                        }}
                      >
                        <span className="icon">{section.icon}</span>
                        {section.label}
                      </NavLink>
                    </NavItem>
                  ))}
                </NavList>

                <ThemeToggle onClick={toggleTheme}>
                  {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </ThemeToggle>
              </Sidebar>

              <MainContent>
                <ContentSection
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Suspense fallback={<LoadingContainer>Loading...</LoadingContainer>}>
                    {renderSection()}
                  </Suspense>
                </ContentSection>
              </MainContent>
            </MainContainer>

            <Footer />
            
            {openModal.state && (
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
          </Body>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
