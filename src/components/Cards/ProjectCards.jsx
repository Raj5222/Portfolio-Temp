
import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 16px;
    box-shadow: ${({ theme }) => theme.shadow};
    overflow: hidden;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.3s ease-in-out;
    border: 1px solid ${({ theme }) => theme.border};
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: ${({ theme }) => theme.glow};
        border-color: ${({ theme }) => theme.primary};
    }

    @media (max-width: 768px) {
        max-width: 400px;
        height: 450px;
        padding: 20px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 12px;
    object-fit: cover;
    border: 1px solid ${({ theme }) => theme.border};
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.card_hover};
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.primary}30;
`;

const TechStack = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin: 8px 0;
`;

const TechIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.card_light};
    border: 1px solid ${({ theme }) => theme.border};
    transition: all 0.2s ease;
    
    &:hover {
        transform: scale(1.1);
        border-color: ${({ theme }) => theme.primary};
    }

    img {
        width: 20px;
        height: 20px;
        object-fit: contain;
    }
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 14px;
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 2px solid ${({ theme }) => theme.card};
`;

// Technology icon mapping
const getTechIcon = (tech) => {
    const techName = tech.toLowerCase();
    
    const iconMap = {
        'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        'firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        'flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        'android': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
        'tensorflow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        'django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
        'flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
        'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        'angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        'php': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    };
    
    return iconMap[techName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
};

const ProjectCards = ({project, setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.images[0]}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            
            <TechStack>
                {project.tags?.slice(0, 6).map((tech, index) => (
                    <TechIcon key={index} title={tech}>
                        <img src={getTechIcon(tech)} alt={tech} />
                    </TechIcon>
                ))}
            </TechStack>
            
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar key={index} src={member.img}/>
                ))}
            </Members>
        </Card>
    )
}

export default ProjectCards
