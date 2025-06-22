import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import Icon from "../../images/Raj-logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Page_Title, Section_Title } from "../../utils/Themes";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      getCurrentSectionId();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentSectionId = () => {
    const sections = document.querySelectorAll("section, div[id]");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top >= -100 &&
        rect.top < window.innerHeight / 2 &&
        Section_Title.includes(section.id)
      ) {
        setActiveSection(section.id);
        document.title = `${Page_Title} - ${
          String(section.id[0]).toUpperCase() + String(section.id).slice(1)
        }`;
      }
    });
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const menuItems = ["About", "Skills", "Experience", "Projects", "Education", "Connect"];

  return (
    <Nav scrolled={scrolled}>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '100%' }}
      >
        <NavbarContainer>
          <NavLogo to="/">
            <motion.a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                cursor: "pointer",
                textDecoration: "none"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src={Icon} 
                alt="Raj Sathvara Logo" 
                style={{ width: "45px", marginRight: "10px" }}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              />
              <Span>Portfolio</Span>
            </motion.a>
          </NavLogo>

          <MobileIcon>
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </MobileIcon>

          <NavItems>
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={activeSection === item.toLowerCase() ? 'active' : ''}
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </NavItems>

          <ButtonContainer>
            

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHubButton 
                href={Bio.github} 
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </GitHubButton>
            </motion.div>
          </ButtonContainer>

          <AnimatePresence>
            {isOpen && (
              <MobileMenu
                as={motion.div}
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                isOpen={isOpen}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MobileLink
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className={activeSection === item.toLowerCase() ? 'active' : ''}
                    >
                      {item}
                    </MobileLink>
                  </motion.div>
                ))}

                

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <GitHubButton
                    href={Bio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: "10px 20px", fontSize: "14px", height: "40px" }}
                  >
                    GitHub Profile
                  </GitHubButton>
                </motion.div>
              </MobileMenu>
            )}
          </AnimatePresence>
        </NavbarContainer>
      </motion.div>
    </Nav>
  );
};

export default Navbar;