
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  padding: 80px 0;
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
      radial-gradient(circle at 20% 30%, ${({ theme }) => theme.primary}08 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, ${({ theme }) => theme.secondary}08 0%, transparent 50%);
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
  gap: 50px;
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
  width: 100%;
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
  gap: 30px;
  width: 100%;
  max-width: 1000px;
`;

const SkillCategory = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 30px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 25px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
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
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
`;

const CategoryInfo = styled.div`
  flex: 1;
  min-width: 200px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const CategoryDescription = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const SkillsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
`;

const SkillName = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  white-space: nowrap;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  gap: 20px;
`;

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.border};
  border-top: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
`;

const LoadingText = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1rem;
  font-weight: 500;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  color: ${({ theme }) => theme.error || '#ef4444'};
  text-align: center;
  flex-direction: column;
  gap: 15px;
`;

// Static fallback data for faster initial load
const fallbackSkills = [
  {
    title: "Frontend",
    skills: [
      { name: "React", image: "https://skillicons.dev/icons?i=react" },
      { name: "JavaScript", image: "https://skillicons.dev/icons?i=js" },
      { name: "HTML", image: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", image: "https://skillicons.dev/icons?i=css" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Python", image: "https://skillicons.dev/icons?i=python" },
      { name: "Express", image: "https://skillicons.dev/icons?i=express" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", image: "https://skillicons.dev/icons?i=mongodb" },
      { name: "MySQL", image: "https://skillicons.dev/icons?i=mysql" }
    ]
  }
];

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
  const [skills, setSkills] = useState(fallbackSkills);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch('https://raw.githubusercontent.com/Raj5222/Portfolio-data/main/skills.json', {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error('Failed to fetch skills data');
        }
        
        const data = await response.json();
        if (data && Array.isArray(data)) {
          setSkills(data);
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.warn('Skills fetch timed out, using fallback data');
        } else {
          console.error('Error fetching skills:', error);
          setError('Using cached skills data');
        }
        // Keep fallback data on error
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const memoizedSkills = useMemo(() => skills, [skills]);

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

  return (
    <Container id="skills" ref={ref}>
      <Wrapper>
        <HeaderSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Title>Skills & Technologies</Title>
            <Subtitle>
              Here are the technologies and tools I use to build amazing digital experiences
            </Subtitle>
          </motion.div>
        </HeaderSection>

        <SkillsGrid>
          {memoizedSkills.map((category, index) => (
            <SkillCategory
              key={category.title}
              alternate={index % 2 === 1}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
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
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: (index * 0.1) + (skillIndex * 0.05),
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              color: '#f59e0b', 
              fontSize: '0.9rem', 
              textAlign: 'center',
              marginTop: '20px'
            }}
          >
            {error}
          </motion.div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Skills;
