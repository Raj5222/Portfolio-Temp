
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
    background: ${({ theme }) => theme.gradient_secondary};
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.glow};
    border-color: ${({ theme }) => theme.secondary};
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

const CompanyLogo = styled.img`
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

const Role = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
  line-height: 1.3;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 8px;
`;

const Duration = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const Description = styled.div`
  margin-bottom: 24px;
`;

const DescriptionText = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const SkillsSection = styled.div`
  margin-top: 20px;
`;

const SkillsHeader = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '🛠️';
    font-size: 1.1rem;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.secondary}20;
  }
`;

const SkillIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`;

const DocumentLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: ${({ theme }) => theme.gradient_secondary};
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
  }

  &::before {
    content: '📄';
    font-size: 1rem;
  }
`;

// Tech icon mapping
const getTechIcon = (tech) => {
  const techIcons = {
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'Ubuntu': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
  };
  
  return techIcons[tech] || `https://via.placeholder.com/18x18/00d4ff/ffffff?text=${tech.charAt(0)}`;
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Header>
        <CompanyLogo src={experience.img} alt={experience.company} />
        <ContentSection>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Duration>{experience.date}</Duration>
        </ContentSection>
      </Header>

      <Description>
        {experience.desc && (
          <DescriptionText>{experience.desc}</DescriptionText>
        )}
        
        {experience.skills && (
          <SkillsSection>
            <SkillsHeader>Technologies Used</SkillsHeader>
            <SkillsGrid>
              {experience.skills.map((skill, skillIndex) => (
                <SkillTag key={skillIndex}>
                  <SkillIcon src={getTechIcon(skill)} alt={skill} />
                  {skill}
                </SkillTag>
              ))}
            </SkillsGrid>
          </SkillsSection>
        )}
      </Description>

      {experience.doc && (
        <DocumentLink href={experience.doc} target="_blank" rel="noopener noreferrer">
          View Certificate
        </DocumentLink>
      )}
    </Card>
  );
};

export default ExperienceCard;
