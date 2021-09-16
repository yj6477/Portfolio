import styled from 'styled-components';

export const ProjectContainer = styled.div`
    background: #292929;
    padding: 5px 40px;
    height: 980px;
    width: 100%;
    position: relative;
`;

export const ProjectWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`;

export const ProjectH1 = styled.h1`
    font-size: 48px;
    color: #fff;
    margin-top: 40px;
    text-align: left;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const ProjectH2 = styled.h2`
    font-size: 34px;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: left;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const ProjectImage = styled.img`
    border-radius: 50%;
    width: 600px;
    height: 600px;
    z-index: 5;
`;