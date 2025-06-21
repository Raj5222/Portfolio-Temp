import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroBgAnimation from '../HeroBgAnimation';
import { 
  HeroContainer, 
  HeroBg, 
  HeroLeftContainer, 
  Img, 
  HeroRightContainer, 
  HeroInnerContainer, 
  TextLoop, 
  Title, 
  Span, 
  SubTitle, 
  ResumeButton,
  SocialLinks,
  SocialLink
} from './HeroStyle';
import HeroImg from '../../images/Raj Image.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { Pass } from '../../utils/Themes';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (window.raj === Pass) {
    window.bio = Bio;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <HeroLeftContainer>
              <motion.div variants={itemVariants}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                        delay: 75,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <ResumeButton 
                  href={Bio.resume} 
                  target='_blank'
                  rel="noopener noreferrer"
                  as={motion.a}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check Resume
                </ResumeButton>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <SocialLinks>
                  {Bio.github && (
                    <SocialLink 
                      href={Bio.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      as={motion.a}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </SocialLink>
                  )}
                  {Bio.linkedin && (
                    <SocialLink 
                      href={Bio.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      as={motion.a}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin />
                    </SocialLink>
                  )}
                  {Bio.twitter && (
                    <SocialLink 
                      href={Bio.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      as={motion.a}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTwitter />
                    </SocialLink>
                  )}
                  {Bio.insta && (
                    <SocialLink 
                      href={Bio.insta} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      as={motion.a}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaInstagram />
                    </SocialLink>
                  )}
                </SocialLinks>
              </motion.div>
            </HeroLeftContainer>

            <HeroRightContainer>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Img src={HeroImg} alt="Raj Sathvara - Portfolio" />
              </motion.div>
            </HeroRightContainer>
          </motion.div>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;