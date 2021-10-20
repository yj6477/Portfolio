import React from 'react';
import { PageContainer, PageContent, PageH1, PageP, PageWrapper, PageH2 } from './PrjInfoElements';
import { InfoIndicator } from '../InfoSection/InfoElements';
import { FaJava, FaGithub } from 'react-icons/fa';
import { SiAndroidstudio, SiFirebase } from 'react-icons/si';
import { Slide } from 'react-slideshow-image';

const PrjInfoSection = () => {

    const settings = {
        indicators: true,
        autoplay: false,
        indicators: i => (<InfoIndicator></InfoIndicator>),
        transitionDuration: 300
    };
    return (
        <>
            <PageContainer>
                <PageContent>
                    <PageH1>Introduction</PageH1>
                    <PageP>CookFlex is a social media based platform on Android devices for curious users.  CookFlex allows users to learn recipes from other users by introducing a structured, standardized template. Additionally, users can rate the recipe they created, giving others a metric to judge the recipe. Moreover, if a user wants to share their own recipes, they  can create it through our easy-to-follow, convenient template.</PageP>
                </PageContent>
            </PageContainer>
            <PageContainer>
                <PageH2>Tools Used</PageH2>
                <Slide {...settings}>
                    <PageWrapper>
                        <PageP style = {{ fontSize: "150px"}}><FaJava/><FaGithub/><SiAndroidstudio/><SiFirebase/></PageP>
                    </PageWrapper>   
                </Slide>            
            </PageContainer>
            <PageContainer>
                <PageContent>
                    <PageH1>Features</PageH1>
                </PageContent>
            </PageContainer>
            <PageContainer>
                <PageContent>
                    <PageH1>Team Roles</PageH1>
                </PageContent>
            </PageContainer>
        </>
    )
}

export default PrjInfoSection
