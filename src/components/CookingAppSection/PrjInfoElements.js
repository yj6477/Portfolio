import styled from "styled-components";

export const PageContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-itmes: center;
padding: 0 30px;
width: 100%;
height: 800px;
position: relative;

`;

export const PageContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    height: 100%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
`;

export const PageH1 = styled.h1`
    margin-top: 100px;
    color: #fff;
    font-size: 48px;
    text-align: center;


    @media screen and (max-width: 768px){
        font-size: 48px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const PageH2 = styled.h2`
    font-size: 34px;
    color: #fff;
    margin-top: 30px;
    text-align: left;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const PageP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;


    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;