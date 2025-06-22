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
  SocialIcon
} from './HeroStyle';
import HeroImg from '../../images/Raj Image.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { Pass } from '../../utils/Themes';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  if (window.raj === Pass) {
    window.bio = Bio;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about">
      <HeroContainer ref={ref}>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div variants={itemVariants}>
                <Title>
                  Hi, I am <br />
                  <span className="text-gradient">{Bio.name}</span>
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
                        delay: 50,
                        deleteSpeed: 30,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div variants={itemVariants}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <motion.div variants={itemVariants}>
                <SocialLinks>
                  {Bio.github && (
                    <SocialIcon 
                      href={Bio.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </SocialIcon>
                  )}
                  {Bio.linkedin && (
                    <SocialIcon 
                      href={Bio.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin />
                    </SocialIcon>
                  )}
                  {Bio.twitter && (
                    <SocialIcon 
                      href={Bio.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTwitter />
                    </SocialIcon>
                  )}
                  {Bio.insta && (
                    <SocialIcon 
                      href={Bio.insta} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaInstagram />
                    </SocialIcon>
                  )}
                </SocialLinks>
              </motion.div>

              <motion.div variants={itemVariants}>
                <ResumeButton 
                  href={Bio.resume} 
                  target="_blank"
                  rel="noopener noreferrer"
                  as={motion.a}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 40px rgba(133, 76, 230, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </ResumeButton>
              </motion.div>
            </HeroLeftContainer>

            <HeroRightContainer>
              <motion.div variants={imageVariants}>
                <Img 
                  src={HeroImg} 
                  alt="Raj Sathvara - Full Stack Developer"
                  loading="eager"
                />
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </section>
  );
};

export default HeroSection;