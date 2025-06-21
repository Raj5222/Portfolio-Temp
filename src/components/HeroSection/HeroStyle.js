import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
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
  border: 3px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 30px ${({ theme }) => theme.primary}40;
  transition: all 0.3s ease;

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
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 3.125rem);
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 1rem;
  
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: clamp(1.25rem, 4vw, 1.75rem);
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
  margin-bottom: 1.5rem;
  
  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, #b854d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SubTitle = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 90vw;
  color: ${({ theme }) => theme.text_primary}CC;

  @media (max-width: 960px) {
    text-align: center;
    max-width: 100%;
  }
`;

export const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 16px 24px;
  color: ${({ theme }) => theme.white};
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.3s ease;
  background: linear-gradient(225deg, #854CE6 0%, #b854d4 100%);
  box-shadow: 0 8px 32px ${({ theme }) => theme.primary}40;
  border: none;
  display: inline-block;
  margin-bottom: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.primary}60;
  }

  @media (max-width: 960px) {
    margin: 0 auto 2rem auto;
  }

  @media (max-width: 640px) {
    padding: 14px 20px;
    font-size: 1rem;
    max-width: 250px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.card};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}20;
    box-shadow: 0 4px 15px ${({ theme }) => theme.primary}30;
  }
`;