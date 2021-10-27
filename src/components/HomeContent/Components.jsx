import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


import bgImage from "../../images/background.svg"

export const Container = styled.main`
   height: 100vh;
   width: 100%;
   background-color: #2941ab;
   background-image: url(${bgImage});
   background-size: 170%;
   background-position: 44% 7%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const Title = styled.h1`
   width: 100%;
   max-width: 1020px;
   padding: 0 0 40px 0;
   font-family: "Circular Spotify Tx T Black";
   font-size: 156px;
   text-align: center;
   line-height: 166px;
   letter-spacing: -6px;
   color: #1ed760;
`;

export const Description = styled.p`
   width: 100%;
   max-width: 800px;
   padding: 0 0 40px 0;
   font-family: "Circular Spotify Tx T Black";
   font-size: 18px;
   font-weight: 300;
   text-align: center;
   color: #1ed760;
`;

export const ButtonLink = styled(Link)`
   height: 48px;
   padding: 16px 32px;
   border-radius: 500px;
   color: #2941ab;
   background-color: #1ed760;
   font-family: "Circular Spotify Tx T Black";
   font-size: 14px;
   text-align: center;
   text-decoration: none;
   line-height: 20px;
`;