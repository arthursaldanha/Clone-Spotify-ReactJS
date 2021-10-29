import React from 'react'

import * as S from "./styles"

// Images
import logo from "../../assets/images/logo.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

import Links from "./content"

const Footer = ({ margin, padding }) => {
   return (
      <S.StyledFooter>
         <S.Container>
            <S.Case>
               <S.LogoLink to="/">
                  <S.Logo src={logo}/>
               </S.LogoLink>
            </S.Case>

            <S.Case>
               <S.CaseTitle>EMPRESA</S.CaseTitle>    
               {Links.slice(0, 3).map(( { id, text, path} ) => (
               <S.NavLink key={id} to={path}>{text}</S.NavLink>
                  ))}
            </S.Case>

            <S.Case>
               <S.CaseTitle>COMUNIDADES</S.CaseTitle>    
               {Links.slice(3, 8).map(( { id, text, path} ) => (
               <S.NavLink key={id} to={path}>{text}</S.NavLink>
                  ))}
            </S.Case>

            <S.Case>
               <S.CaseTitle>LINKS ÚTEIS</S.CaseTitle>    
               {Links.slice(8, 11).map(( { id, text, path} ) => (
               <S.NavLink key={id} to={path}>{text}</S.NavLink>
                  ))}
            </S.Case>

            <S.Case margin="0 0 0 195px" padding="0 0 0 0">
               <S.SocialContainer>
                  <S.SocialLink to="/" margin={"15px"}>
                     <S.SocialMedia src={instagram}/>
                  </S.SocialLink>

                  <S.SocialLink to="/" margin={"15px"}>
                     <S.SocialMedia src={twitter}/>
                  </S.SocialLink>

                  <S.SocialLink to="/">
                     <S.SocialMedia src={facebook}/>
                  </S.SocialLink>
               </S.SocialContainer>
            </S.Case>
         </S.Container>
      </S.StyledFooter>
   )
}

export default Footer