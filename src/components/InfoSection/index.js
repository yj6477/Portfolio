import React from 'react';
import { AboutContainer, InfoWrapper,InfoIndicator, AboutH1,AboutH2, SkillList, Bar, BarFill } from './InfoElements';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { FaGitAlt, FaAws } from 'react-icons/fa';
import {SiAndroidstudio, SiIntellijidea, SiVisualstudiocode} from 'react-icons/si'



const AboutSection = () => {

    const settings = {
        indicators: true,
        autoplay: false,
        indicators: i => (<InfoIndicator></InfoIndicator>)
    };
    
      return (
        <AboutContainer id="about">
            <AboutH1>My Skills</AboutH1>
            <Slide {...settings}>
                <InfoWrapper>
                    <AboutH2>Languages</AboutH2>
                    <SkillList>Java</SkillList>
                    <Bar><BarFill style={{width: "100%", backgroundColor: "#20E1ED"}}>5</BarFill></Bar>
                    <SkillList>C++</SkillList>
                    <Bar><BarFill style={{width: "60%", backgroundColor: "#20E1ED"}}>3</BarFill></Bar>
                    <SkillList>C</SkillList>
                    <Bar><BarFill style={{width: "60%", backgroundColor: "#20E1ED"}}>3</BarFill></Bar>
                    <SkillList>HTML</SkillList>
                    <Bar><BarFill style={{width: "100%", backgroundColor: "#20E1ED"}}>5</BarFill></Bar>
                    <SkillList>CSS</SkillList>
                    <Bar><BarFill style={{width: "60%", backgroundColor: "#20E1ED"}}>3</BarFill></Bar>
                    <SkillList>Javascript</SkillList>
                    <Bar><BarFill style={{width: "80%", backgroundColor: "#20E1ED"}}>4</BarFill></Bar>
                </InfoWrapper>
                <InfoWrapper>
                    <AboutH2>Tools/Framework</AboutH2>
                    <SkillList><FaGitAlt/>Git</SkillList>
                    <SkillList><SiAndroidstudio/> Studio</SkillList>
                    <SkillList><SiVisualstudiocode/>Visual Studio</SkillList>
                    <SkillList><FaAws/>EC2</SkillList>
                    <SkillList><SiIntellijidea/>IntelliJ</SkillList>
                </InfoWrapper>
                <InfoWrapper>
                    <AboutH2>Coding Skills</AboutH2>
                    <SkillList>Object Oriented Programming</SkillList>
                    <SkillList>Debugging</SkillList>
                    <SkillList>Testing</SkillList>
                    <SkillList>Agile</SkillList>
                    <SkillList>Android Mobile Development</SkillList>
                    <SkillList>Web Development</SkillList>
                    <SkillList>React</SkillList>
                </InfoWrapper>      
            </Slide>
            
            
            
        </AboutContainer>
        
      );
  };
export default AboutSection
