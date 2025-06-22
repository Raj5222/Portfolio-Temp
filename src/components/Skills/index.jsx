import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Pass, fadeInUp, staggerContainer, scaleIn } from '../../utils/Themes';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 100px 0;
  background: ${({ theme }) => theme.bg};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%);
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  text-align: center;
  font-weight: 800;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 4s ease-in-out infinite;
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Desc = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  text-align: center;
  max-width: 800px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  margin-bottom: 3rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 40px;
  justify-content: center;
`;

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 550px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 25px;
  padding: 35px;
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
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
    border-radius: 25px 25px 0 0;
  }

  &:hover {
    transform: translateY(-15px);
    box-shadow: ${({ theme }) => theme.glow};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_hover};
  }

  @media (max-width: 768px) {
    max-width: 450px;
    padding: 25px;
  }

  @media (max-width: 500px) {
    max-width: 350px;
    padding: 20px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 25px;
  text-align: center;
  position: relative;
  font-family: 'Poppins', sans-serif;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
    border-radius: 2px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

const SkillItem = styled(motion.div)`
  border: 2px solid ${({ theme }) => theme.border};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 15px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
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
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
    
    &::before {
      left: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 12px 16px;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    padding: 10px 14px;
  }
`;

const SkillImage = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease;

  @media (max-width: 500px) {
    width: 24px;
    height: 24px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.3rem;
  font-weight: 500;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  color: ${({ theme }) => theme.error};
  text-align: center;
  flex-direction: column;
  gap: 15px;
`;

const LoadingSpinner = styled(motion.div)`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 107, 107, 0.2);
  border-top: 4px solid #ff6b6b;
  border-radius: 50%;
  margin-bottom: 20px;
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
          <LoadingSpinner
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div>Loading amazing skills...</div>
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
              Here are the cutting-edge technologies and tools I master to create exceptional digital experiences.
            </Desc>
          </motion.div>

          <SkillsContainer>
            {skills.map((skill, index) => (
              <Skill
                key={skill.title}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ delay: index * 0.15 }}
              >
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, itemIndex) => (
                    <SkillItem
                      key={item.name}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0]
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: (index * 0.1) + (itemIndex * 0.05),
                        type: "spring",
                        stiffness: 300
                      }}
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