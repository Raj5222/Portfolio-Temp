import { CloseRounded, GitHub, LinkedIn, ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Page_Title } from '../../utils/Themes';

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: flex-start;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin: 8px 6px 0 6px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 600px) {
      font-size: 24px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
      font-size: 12px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 8px 6px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 600px) {
      font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 30px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  border: 1.5px solid ${({ theme }) => theme.text_primary + 99};
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text_primary};
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 8px 6px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 600px) {
      font-size: 16px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0;
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
      font-size: 12px;
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 12px 6px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 600px) {
      font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin: 12px 0;
`;

const Button = styled.a`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s;
  ${({ dull, theme }) => dull && `
    background-color: ${theme.bgLight};
    color: ${theme.text_secondary};
    &:hover {
      background-color: ${theme.bg + 99};
    }
  `}
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
  @media (max-width: 600px) {
      font-size: 12px;
  }
`;

const ProjectModal = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    const [currentImage, setCurrentImage] = useState(0);
    
    if (!project) return null;
    
    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % project?.images?.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + project?.images?.length) % project?.images?.length);
    };

    document.title = project.title ? project.title : Page_Title;

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            document.title = `${Page_Title} - Projects`;
                            setOpenModal({ state: false, project: null });
                        }}
                    />
                    <ImageContainer>
                        <Image src={project.images[currentImage]} alt={`Project Image ${currentImage + 1}`} />
                        {project?.images?.length > 1 && (
                            <>
                                <LeftArrow onClick={handlePrev}>
                                    <ArrowBackIosNewRounded />
                                </LeftArrow>
                                <RightArrow onClick={handleNext}>
                                    <ArrowForwardIosRounded />
                                </RightArrow>
                            </>
                        )}
                    </ImageContainer>
                    <Title>{project?.title}</Title>
                    <Date>{project?.date}</Date>
                    <Tags>
                        {project?.tags.map((tag, idx) => (
                            <Tag key={idx}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project?.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project.member.map((member, idx) => (
                                    <Member key={idx}>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        <Button dull href={project?.github} target="_blank">View Code</Button>
                        <Button href={project?.webapp} target="_blank">View Live App</Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    );
};

export default ProjectModal;
