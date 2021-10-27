import React from "react";

// Components
import { Nav, Container, Logo, NavMenu, NavLink } from "./Components";

// Images
import logo from "../../images/logo.svg";

const Navbar = ({ padding }) => {
  return (
    <Nav>
      <Container>
        <NavLink to="/" padding="0">
          <Logo src={logo} alt={"Logo Spotify"} />
        </NavLink>
        <NavMenu>
          <NavLink to="/premium">Premium</NavLink>

          <NavLink to="/suporte">Suporte</NavLink>

          <NavLink to="/baixar">Baixar</NavLink>

          <NavLink to="/inscrever-se">Inscrever-se</NavLink>

          <NavLink to="/entrar">Entrar</NavLink>
        </NavMenu>
      </Container>
    </Nav>
  );
};

export default Navbar;