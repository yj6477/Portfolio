import React from 'react';
import { AboutContainer, ColumnNarrow, ColumnWide, AboutH1,AboutH2, SkillList, Bar, BarFill } from './AboutElements';

const AboutSection = () => {
    return (
        <>
            <AboutContainer>
                <AboutH1>My Skills</AboutH1>
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
            </AboutContainer>
        </>
    );
};
export default AboutSection
