import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import EducationCard from '../Cards/EducationCard';
import { Pass, fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../../utils/Themes';

const Container = styled.section`
  position: relative;
  z-index: 1;
  padding: 120px 0;
  background: ${({ theme }) => theme.bg};
  overflow: hidden;
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
  background: ${({ theme }) => theme.gradient_accent};
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

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ theme }) => theme.gradient_accent};
    transform: translateX(-50%);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row !important;
    margin-left: 60px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.accent};
  border: 4px solid ${({ theme }) => theme.bg};
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 20px ${({ theme }) => theme.accent}50;

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const CardWrapper = styled.div`
  flex: 1;
  max-width: 45%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
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
  border-top: 4px solid ${({ theme }) => theme.accent};
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

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  if (window.raj === Pass) {
    window.education = educations;
  }

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Raj5222/Portfolio-data/main/Education.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEducations(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEducations();
  }, []);

  if (loading) {
    return (
      <Container id="education">
        <Wrapper>
          <LoadingContainer>
            <LoadingSpinner
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <LoadingText>Loading Education...</LoadingText>
          </LoadingContainer>
        </Wrapper>
      </Container>
    );
  }

  if (error) {
    return (
      <Container id="education">
        <Wrapper>
          <ErrorContainer>
            <h3>Failed to load education</h3>
            <p>{error}</p>
          </ErrorContainer>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container id="education" ref={ref}>
      <Wrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <HeaderSection>
            <motion.div variants={fadeInUp}>
              <Title>Education</Title>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Subtitle>
                My academic journey and the foundations that built my knowledge
              </Subtitle>
            </motion.div>
          </HeaderSection>

          <TimelineContainer>
            {educations.map((education, index) => (
              <TimelineItem
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <TimelineDot />
                <CardWrapper>
                  <EducationCard education={education} index={index} />
                </CardWrapper>
              </TimelineItem>
            ))}
          </TimelineContainer>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Education;