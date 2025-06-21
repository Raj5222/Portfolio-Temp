import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  ThemeToggle,
} from "./NavbarStyledComponent";
import Icon from "../../images/Raj-logo.svg";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Page_Title, Section_Title } from "../../utils/Themes";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        rect.top >= 0 &&
        rect.top < window.innerHeight / 2 &&
        Section_Title.includes(section.id)
      ) {
        document.title = `${Page_Title} - ${
          String(section.id[0]).toUpperCase() + String(section.id).slice(1)
        }`;
      }
    });
  };

  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
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
                alt="Logo" 
                style={{ width: "40px", marginRight: "8px" }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <Span>Portfolio</Span>
            </motion.a>
          </NavLogo>

          <MobileIcon>
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </MobileIcon>

          <NavItems>
            {["About", "Skills", "Experience", "Projects", "Education", "Connect"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </NavItems>

          <ButtonContainer>
            <ThemeToggle onClick={toggleTheme}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </motion.div>
            </ThemeToggle>
            
            <GitHubButton 
              href={Bio.github} 
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </GitHubButton>
          </ButtonContainer>

          {isOpen && (
            <MobileMenu
              as={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              isOpen={isOpen}
            >
              {["About", "Skills", "Experience", "Projects", "Education", "Connect"].map((item) => (
                <MobileLink
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </MobileLink>
              ))}
              
              <ThemeToggle onClick={toggleTheme} style={{ margin: "1rem 0" }}>
                {darkMode ? <FaSun /> : <FaMoon />}
                <span style={{ marginLeft: "8px" }}>
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </ThemeToggle>

              <GitHubButton
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "8px 16px", fontSize: "14px" }}
              >
                GitHub Profile
              </GitHubButton>
            </MobileMenu>
          )}
        </NavbarContainer>
      </motion.div>
    </Nav>
  );
};

export default Navbar;