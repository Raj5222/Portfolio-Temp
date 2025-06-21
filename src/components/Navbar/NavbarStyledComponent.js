import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${({ theme, scrolled }) => 
    scrolled ? theme.card + 'CC' : theme.black};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: ${({ scrolled, theme }) => 
    scrolled ? `1px solid ${theme.primary}20` : 'none'};

  @media (max-width: 960px) {
    transition: 0.8s all ease;
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
    padding: 0 0px;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: 700;
  font-size: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  padding: 8px 0;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    
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
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: rotate(180deg);
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const GitHubButton = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(133, 76, 230, 0.3);
    
    &:before {
      left: 0;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0 16px;
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
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
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
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 24px 40px;
  background: ${({ theme }) => theme.card_light}F0;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid ${({ theme }) => theme.primary}30;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => 
    isOpen ? "translateY(0)" : "translateY(-20px)"};
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 8px 0;
  border-bottom: 1px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-bottom-color: ${({ theme }) => theme.primary};
    transform: translateX(8px);
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom-color: ${({ theme }) => theme.primary};
  }
`;