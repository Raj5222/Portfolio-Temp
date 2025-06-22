
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
`;

const SkillCategory = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 40px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  flex-direction: ${({ alternate }) => alternate ? 'row-reverse' : 'row'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradient_primary};
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.glow};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_hover};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 25px;
  }
`;

const CategoryInfo = styled.div`
  flex: 1;
  min-width: 250px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${({ theme }) => theme.gradient_accent};
    border-radius: 2px;
  }
`;

const CategoryDescription = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.95rem;
  line-height: 1.5;
`;

const SkillsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
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
    transform: translateY(-3px) scale(1.05);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.25);
    
    &::before {
      left: 0;
    }
  }
`;

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease;

  ${SkillItem}:hover & {
    transform: scale(1.1);
  }
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  white-space: nowrap;
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

const getCategoryDescription = (title) => {
  const descriptions = {
    "Frontend": "Building responsive and interactive user interfaces",
    "Backend": "Server-side development and API creation",
    "Database": "Data storage and management solutions",
    "DevOps": "Deployment, monitoring, and infrastructure",
    "Mobile": "Cross-platform mobile application development",
    "Tools": "Development tools and version control",
    "Languages": "Programming languages and frameworks"
  };
  return descriptions[title] || "Technologies and tools I work with";
};

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
                alternate={index % 2 === 1}
                variants={scaleIn}
                whileHover={{ scale: 1.01 }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryInfo>
                  <CategoryTitle>{category.title}</CategoryTitle>
                  <CategoryDescription>
                    {getCategoryDescription(category.title)}
                  </CategoryDescription>
                </CategoryInfo>
                <SkillsContainer>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem
                      key={skill.name}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        delay: (index * 0.1) + (skillIndex * 0.02),
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
