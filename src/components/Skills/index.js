import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Pass, fadeInUp, staggerContainer } from '../../utils/Themes';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding: 0 20px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  font-size: clamp(1rem, 2vw, 1.125rem);
  text-align: center;
  max-width: 90vw;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.primary}30;
  box-shadow: 0 8px 32px rgba(133, 76, 230, 0.15);
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(133, 76, 230, 0.25);
    border-color: ${({ theme }) => theme.primary}60;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 20px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 18px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled(motion.div)`
  border: 1.5px solid ${({ theme }) => theme.text_primary}40;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}20;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(133, 76, 230, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px 14px;
  }

  @media (max-width: 500px) {
    font-size: 0.75rem;
    padding: 8px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: ${({ theme }) => theme.error};
  text-align: center;
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
        <LoadingContainer>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            Loading skills...
          </motion.div>
        </LoadingContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container id="skills">
        <ErrorContainer>
          <div>
            <h3>Unable to load skills</h3>
            <p>{error}</p>
          </div>
        </ErrorContainer>
      </Container>
    );
  }

  return (
    <Container id="skills" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Wrapper>
          <motion.div variants={fadeInUp}>
            <Title>Skills & Technologies</Title>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Desc>
              Here are the technologies and tools I work with to bring ideas to life.
            </Desc>
          </motion.div>

          <SkillsContainer>
            {skills.map((skill, index) => (
              <Skill
                key={skill.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
              >
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, itemIndex) => (
                    <SkillItem
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                    >
                      <SkillImage 
                        src={item.image} 
                        alt={item.name}
                        loading="lazy"
                      />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </Wrapper>
      </motion.div>
    </Container>
  );
};

export default Skills;