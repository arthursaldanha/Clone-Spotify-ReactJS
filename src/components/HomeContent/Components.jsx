import styled, { css } from "styled-components";

import bgImage from "../../images/background.svg"

export const Container = styled.div`
   height: 100vh;
   width: 100%;

   background-color: #2941ab;
   background-image: url(${bgImage});
   background-size: 170%;
   background-position: 44% 7%;

   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Title = styled.h1`
   width: 100%;
   max-width: 1020px;

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
   
   padding: 0 0 0 40px;

   font-size: 18px;
   text-align: center;

`;