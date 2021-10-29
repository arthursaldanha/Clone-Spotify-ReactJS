import styled from "styled-components";
import { NavLink as Link } from "react-router-dom"

export const Header = styled.header`
   width: 100%;
   height: 80px;
   background-color: #000;
`;

export const Container = styled.nav`
   height: 100%;
   max-width: 1170px;
   margin: 0 auto;
   padding: 0 20px;

   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   @media screen and (max-width: 992px) {
      max-width: 970px;
   }
`;

export const Logo = styled.img`
   width: 132px;
   height: 41px;
`;

export const NavMenu = styled.div`
   width: 497px;

   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
`;

export const NavLink = styled(Link)`
   font-size: 16px;
   text-decoration: none;
   color: #fff;
   transition: 0.3s;

   &:hover {
      color: #1ed760;
   }

   &.active {
      color: #1ed760;
   }
`;