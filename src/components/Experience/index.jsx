import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { Pass } from '../../utils/Themes';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 20px;
    @media (max-width: 960px) {
        padding: 20px 16px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    gap: 20px;
    @media (max-width: 960px) {
        flex-direction: column;
        gap: 16px;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 90vw;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        max-width: 90w;
        text-wrap: balance;
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Index = () => {
  const [experiences, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if(window.raj === Pass){
    window.experience = experiences
  }

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Raj5222/Portfolio-data/main/experiences.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEducationData(data);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEducationData();
  }, []);

  if (loading) {
    // return console.log("Fetching Experience Loading")
  }

  if (error) {
    return console.log("Fetching Experience Error")
  }
  return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My professional journey as a software engineer, involving roles at different companies and participation in various projects.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <ExperienceCard experience={experience} index={index}/>
                                        </TimelineContent>
                                        <TimelineSeparator>
                                            <TimelineDot variant="outlined" color="secondary" />
                                            {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#306EE8' }} />}
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }} />
                                    </>
                                ) : (
                                    <>
                                        <TimelineContent sx={{ py: '12px', px: 2 }} />
                                        <TimelineSeparator>
                                            <TimelineDot variant="outlined" color="secondary" />
                                            {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#306EE8' }} />}
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <ExperienceCard experience={experience} index={index}/>
                                        </TimelineContent>
                                    </>
                                )}
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Index