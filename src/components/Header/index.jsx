import React from "react";

// Components
import * as S from "./styles";

// Content
import Routes from "./content"

// Images
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.NavLink to="/">
          <S.Logo src={logo} alt={"Logo Spotify"} />
        </S.NavLink>
        <S.NavMenu>
          {Routes.map(( { id, path, text } ) => (
            <S.NavLink key={id} to={path} activeClassName="active">{text}</S.NavLink>    
          ))}
        </S.NavMenu>
      </S.Container>
    </S.Header>
  );
};

export default Header;