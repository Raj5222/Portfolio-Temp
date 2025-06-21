import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.black};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 3px solid transparent;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: padding-box;
  transition: all 0.3s ease;
  filter: drop-shadow(0 10px 30px rgba(133, 76, 230, 0.3));

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 15px 40px rgba(133, 76, 230, 0.5));
  }

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 2.5rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: clamp(1.5rem, 3vw, 2rem);
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
  margin-bottom: 1.5rem;
  align-items: center;

  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

export const SubTitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 90vw;
  color: ${({ theme }) => theme.text_primary + 'E6'};

  @media (max-width: 960px) {
    text-align: center;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(133, 76, 230, 0.3);
  }

  @media (max-width: 640px) {
    width: 45px;
    height: 45px;
    font-size: 1.25rem;
  }
`;

export const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 16px 32px;
  color: ${({ theme }) => theme.white};
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(133, 76, 230, 0.4);
    
    &:before {
      left: 0;
    }
  }

  @media (max-width: 640px) {
    padding: 14px 28px;
    font-size: 1rem;
    max-width: 280px;
  }
`;