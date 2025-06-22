import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  background: ${({ theme, scrolled }) => 
    scrolled ? theme.card + 'F0' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(20px)' : 'none'};
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-bottom: ${({ scrolled, theme }) => 
    scrolled ? `1px solid ${theme.border}` : 'none'};
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? theme.shadow_secondary : 'none'};

  @media (max-width: 960px) {
    height: 80px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  width: 90%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  
  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const Span = styled.div`
  padding: 0 8px;
  font-weight: 700;
  font-size: 20px;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    transform: translateY(-2px);
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-decoration: none;
  position: relative;
  padding: 12px 0;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 50%;
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
    transition: all 0.3s ease;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
    
    &:before {
      width: 100%;
    }
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    
    &:before {
      width: 100%;
    }
  }
`;

export const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 2px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: ${({ theme }) => theme.white};
    transform: scale(1.1) rotate(180deg);
    box-shadow: ${({ theme }) => theme.glow};
    
    &::before {
      opacity: 1;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const GitHubButton = styled.a`
  border: 2px solid transparent;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  justify-content: center;
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 25px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  padding: 0 24px;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);

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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 107, 107, 0.4);
    
    &::before {
      left: 0;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0 20px;
    height: 40px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.2);
  }

  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 90px;
  right: 0;
  width: 100%;
  padding: 30px 40px;
  background: ${({ theme }) => theme.card}F5;
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 0 0 25px 25px;
  box-shadow: ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.border};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => 
    isOpen ? "translateY(0)" : "translateY(-30px)"};
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid transparent;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateX(10px);
    
    &::before {
      width: 100%;
    }
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    
    &::before {
      width: 100%;
    }
  }
`;