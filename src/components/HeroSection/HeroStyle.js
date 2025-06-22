import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px;
  min-height: 100vh;
  overflow: hidden;
  
  @media (max-width: 960px) {
    padding: 80px 20px;
    min-height: 90vh;
  }
  
  @media (max-width: 640px) {
    padding: 60px 16px;
    min-height: 85vh;
  }
  
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 70%, rgba(255, 107, 107, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(78, 205, 196, 0.15) 0%, transparent 50%);
    z-index: -1;
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
  z-index: -1;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 60px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 960px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  align-items: center;
  
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px;
  border-radius: 50%;
  border: 4px solid transparent;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1) border-box;
  background-clip: padding-box;
  box-shadow: 
    0 0 50px rgba(255, 107, 107, 0.4),
    0 0 100px rgba(78, 205, 196, 0.2),
    inset 0 0 50px rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: brightness(1.1) contrast(1.1);
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
    border-radius: 50%;
    z-index: -1;
    animation: rotate 10s linear infinite;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 0 80px rgba(255, 107, 107, 0.6),
      0 0 120px rgba(78, 205, 196, 0.3);
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

export const Title = styled.div`
  font-weight: 800;
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  
  background: linear-gradient(135deg, #ffffff 0%, #ff6b6b 50%, #4ecdc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 4s ease-in-out infinite;
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  display: flex;
  gap: 15px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

export const Span = styled.span`
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
    border-radius: 2px;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

export const SubTitle = styled.div`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 400;
  font-family: 'Inter', sans-serif;

  @media (max-width: 960px) {
    text-align: center;
    max-width: 100%;
  }
`;

export const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: fit-content;
  text-align: center;
  padding: 18px 36px;
  color: ${({ theme }) => theme.white};
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  box-shadow: 0 15px 35px rgba(255, 107, 107, 0.4);
  border: none;
  display: inline-block;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%);
    transition: left 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(255, 107, 107, 0.6);
    
    &::before {
      left: 0;
    }
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 960px) {
    margin: 0 auto 2rem auto;
  }

  @media (max-width: 640px) {
    padding: 16px 28px;
    font-size: 1.1rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.8rem;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.border};
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
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 15px 30px rgba(255, 107, 107, 0.4);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 640px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;