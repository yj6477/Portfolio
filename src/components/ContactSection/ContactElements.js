import styled from 'styled-components';

export const ContactContainer = styled.div`
    background: #0c0c0c;
    padding: 5px 40px;
    height: 980px;
    width: 100%;
    position: relative;
`;  

export const ContactWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`;

export const ContactH1 = styled.h1`
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

export const ContactH2 = styled.h2`
    font-size: 34px;
    color: #fff;
    margin-top: 30px;
    text-align: left;

    @media screen and (max-width: 768px){
        font-size: 34px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const ContactP =styled.p`
    font-size 24px;
    color: #fff;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const ContactName = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`;

export const ContactMessage =styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`;

export const ColumnNarrow = styled.div`
    width: 30%; 
    float: left; 
    padding-right: 3%; 
    min-height 175px;
`;

export const ColumnWide = styled.div`
    width: 70%; 
    float: left;
    min-height: 225px;
`;

// input[type=text], textarea{
//     width: 100%;
//     padding: 12px;
//     border: 1px solid #cccccc;
//     border-radius: 4px;
//     box-sizing: border-box;
//     margin-top: 6px;
//     margin-bottom: 16px;
//     resize: vertical;
//   }
//   button[type=submit]{
//     background-color: #0c7c08;
//     color: white;
//     padding: 12px 20px;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//   }

//   button[type=submit]:hover{
//     background-color: #0bcc05;
//   }
  
//   .input-group {
//     margin: 10px 0px 10px 0px;
//     color: white;
//   }
//   .input-group label {
//     display: block;
//     text-align: left;
//     margin: 3px;
//   }
//   .input-group input {
//     background: linear-gradient(rgb(237, 1, 250, 0.5),
//     rgb(242, 0, 255, 0.5));
//     color: white;
//     height: 30px;
//     width: 45%;
//     padding: 5px 10px;
//     font-size: 16px;
//     border-radius: 5px;
//     border: 2px solid rgb(138, 9, 110);
//   }
//   .btn {
//     padding: 10px;
//     font-size: 15px;
//     color: white;
//     background: #b104a2e5;
//     border: none;
//     border-radius: 5px;
//     text-decoration: none;
//   }