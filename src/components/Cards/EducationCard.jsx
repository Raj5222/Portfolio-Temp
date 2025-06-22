
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 32px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradient_accent};
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.glow};
    border-color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.card_hover};
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const InstituteLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.border};
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const ContentSection = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
  line-height: 1.3;
`;

const School = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 8px;
`;

const Duration = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const GradeSection = styled.div`
  margin-top: 16px;
  padding: 16px;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const GradeLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const GradeValue = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.gradient_accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const EducationCard = ({ education, index }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Header>
        <InstituteLogo src={education.img} alt={education.school} />
        <ContentSection>
          <Degree>{education.degree}</Degree>
          <School>{education.school}</School>
          <Duration>{education.date}</Duration>
        </ContentSection>
      </Header>

      {education.desc && (
        <Description>{education.desc}</Description>
      )}

      {education.grade && (
        <GradeSection>
          <GradeLabel>Grade:</GradeLabel>
          <GradeValue>{education.grade}</GradeValue>
        </GradeSection>
      )}
    </Card>
  );
};

export default EducationCard;
