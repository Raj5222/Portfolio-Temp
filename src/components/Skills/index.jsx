
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Pass, fadeInUp, staggerContainer, scaleIn } from '../../utils/Themes';

const Container = styled.section`
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 120px 0;
  background: ${({ theme }) => theme.bg};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, ${({ theme }) => theme.primary}15 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, ${({ theme }) => theme.secondary}15 0%, transparent 40%);
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 24px;
  background: ${({ theme }) => theme.gradient_primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradient_primary};
    border-radius: 24px 24px 0 0;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.glow};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_hover};
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 30px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.gradient_accent};
    border-radius: 2px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 16px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient_secondary};
    transition: left 0.3s ease;
    z-index: -1;
    opacity: 0.1;
  }

  &:hover {
    transform: translateY(-8px) scale(1.05);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 15px 35px rgba(0, 212, 255, 0.25);
    
    &::before {
      left: 0;
    }
  }
`;

const SkillIcon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease;

  ${SkillItem}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const SkillName = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  line-height: 1.3;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  gap: 20px;
`;

const LoadingSpinner = styled(motion.div)`
  width: 80px;
  height: 80px;
  border: 4px solid ${({ theme }) => theme.border};
  border-top: 4px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
`;

const LoadingText = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.2rem;
  font-weight: 500;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  color: ${({ theme }) => theme.error};
  text-align: center;
  flex-direction: column;
  gap: 20px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  if (window.raj === Pass) {
    window.skills = skills;
  }

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Raj5222/Portfolio-data/main/skills.json');
        if (!response.ok) {
          throw new Error('Failed to fetch skills data');
        }
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <Container id="skills">
        <Wrapper>
          <LoadingContainer>
            <LoadingSpinner
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <LoadingText>Loading Skills...</LoadingText>
          </LoadingContainer>
        </Wrapper>
      </Container>
    );
  }

  if (error) {
    return (
      <Container id="skills">
        <Wrapper>
          <ErrorContainer>
            <h3>Failed to load skills</h3>
            <p>{error}</p>
          </ErrorContainer>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container id="skills" ref={ref}>
      <Wrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <HeaderSection>
            <motion.div variants={fadeInUp}>
              <Title>Skills & Technologies</Title>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Subtitle>
                Here are the technologies and tools I use to build amazing digital experiences
              </Subtitle>
            </motion.div>
          </HeaderSection>

          <SkillsGrid>
            {skills.map((category, index) => (
              <SkillCategory
                key={category.title}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryTitle>{category.title}</CategoryTitle>
                <SkillsContainer>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem
                      key={skill.name}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        delay: (index * 0.1) + (skillIndex * 0.05),
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      <SkillIcon 
                        src={skill.image} 
                        alt={skill.name}
                        loading="lazy"
                      />
                      <SkillName>{skill.name}</SkillName>
                    </SkillItem>
                  ))}
                </SkillsContainer>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Skills;
