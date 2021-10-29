import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledFooter = styled.footer`
   width: 100%;
   padding: 80px 0 50px 0;
   background-color: #000;
   
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const Container = styled.nav`
   width: 100%;
   max-width: 1170px;
   margin: 0 auto;


   display: flex;
   flex-flow: row wrap;

   @media screen and (max-width: 992px) {
      max-width: 970px;
   }
`;

export const Case = styled.div`
   display: flex;
   flex-direction: column;
   height: 346px;
   width: 195px;
   padding: ${({ padding }) => padding || "0 15px 0 15px"};
   margin: ${({ margin }) => margin || ""};
`;

export const LogoLink = styled(Link)`

`;

export const NavLink = styled(LogoLink)`
   height: 42px;
   padding: 3px 0 15px 0;
   color: #fff;
   text-decoration: none;
   font-family: "Circular Book";
   font-weight: normal;
   line-height: 24px;
`;

export const Logo = styled.img`
   width: 132px;
   height: 41px;
`;

export const CaseTitle = styled.span`
   height: 16px;
   margin: 20px 0;
   
   font-size: 12px;
   font-family: "Circular Bold";
   line-height: 16.8px;
   text-align: start;
   letter-spacing: 0.96px;
   color: #919496;
`;

export const SocialContainer = styled.div`
   width: 100%;
   margin-top: 20px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;

export const SocialLink = styled(LogoLink)`
   width: 54px;
   height: 54px;
   border-radius: 50%;
   background-color: #222326;
   margin-right: ${({ margin }) => margin || ""};
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;

   
`;

export const SocialMedia = styled.img`
   width: 24px;
   height: 24px;
   background-color: #fff;

   ${SocialLink}:hover & {
      background-color: #1ed760;
   }
`;