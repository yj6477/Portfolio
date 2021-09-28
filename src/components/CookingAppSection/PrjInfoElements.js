import styled from "styled-components";

export const PageContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-itmes: center;
padding: 0 30px;
height: 900px;
position: relative;
z-index: 1;
`;

export const PageContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PageH1 = styled.h1`
    margin-top: 50%;
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