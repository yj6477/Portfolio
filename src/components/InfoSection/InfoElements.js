import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #0c0c0c;
    padding: 5px 40px;
    height: 980px;
    width: 100%;
    position: relative;
`;

export const InfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`;

export const InfoIndicator = styled.div`
    cursor: pointer;
    color: #fff;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    border: 1px #fff solid;

    &.active{
        
        background: #20E1ED;
    }
`;

export const AboutH1 = styled.h1`
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

export const AboutH2 = styled.h2`
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
export const SkillList = styled.p`
    font-size: 30px;
    color: #fff;
    margin-top: 40px;
    text-align: left;

    @media screen and (max-width: 768px){
        font-size: 30px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`;

export const Bar = styled.div`
    width: 70%;
    height: 40px;
    background-color: #525252;
`;

export const BarFill = styled.div`
    font-size: 25px;
    text-align: center;
    padding-top: 10px;
    color: #fff;
    height: 40px;
`;

