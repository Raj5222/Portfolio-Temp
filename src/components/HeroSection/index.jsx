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
import { Pass, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/Themes';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (window.raj === Pass) {
    window.bio = Bio;
  }

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        
        <HeroInnerContainer ref={ref}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <HeroLeftContainer>
              <motion.div variants={fadeInLeft}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
              </motion.div>
              
              <motion.div variants={fadeInLeft}>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>
              
              <motion.div variants={fadeInLeft}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              
              <motion.div variants={fadeInLeft}>
                <ResumeButton 
                  href={Bio.resume} 
                  target='_blank'
                  rel="noopener noreferrer"
                  as={motion.a}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </ResumeButton>
              </motion.div>
              
              <motion.div variants={fadeInLeft}>
                <SocialLinks>
                  {Bio.github && (
                    <SocialLink 
                      href={Bio.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={24} />
                    </SocialLink>
                  )}
                  {Bio.linkedin && (
                    <SocialLink 
                      href={Bio.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={24} />
                    </SocialLink>
                  )}
                  {Bio.twitter && (
                    <SocialLink 
                      href={Bio.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaTwitter size={24} />
                    </SocialLink>
                  )}
                  {Bio.insta && (
                    <SocialLink 
                      href={Bio.insta} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={24} />
                    </SocialLink>
                  )}
                  <SocialLink href="#connect">
                    <FaEnvelope size={24} />
                  </SocialLink>
                </SocialLinks>
              </motion.div>
            </HeroLeftContainer>

            <HeroRightContainer>
              <motion.div
                variants={fadeInRight}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
                transition={{ duration: 0.3 }}
              >
                <Img 
                  src={HeroImg} 
                  alt="Raj Sathvara - Full Stack Developer Portfolio"
                  loading="eager"
                />
              </motion.div>
            </HeroRightContainer>
          </motion.div>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;