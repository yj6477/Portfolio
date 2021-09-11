import React from 'react';
import { AboutContainer, InfoWrapper,InfoIndicator,  ColumnNarrow, ColumnWide, AboutH1,AboutH2, SkillList, Bar, BarFill } from './InfoElements';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';


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
                    <SkillList>Git</SkillList>
                    <Bar><BarFill style={{width: "100%", backgroundColor: "#20E1ED"}}>5</BarFill></Bar>
                    <SkillList>Android</SkillList>
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
            </Slide>
            
            
            
        </AboutContainer>
        
      );
  };
export default AboutSection
