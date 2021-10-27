import React from 'react'

import { Container, Title, Description, ButtonLink } from "./Components"

const HomeContent = () => {
   return (
      <Container>
         <Title>Escutar muda tudo</Title>
         <Description>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</Description>
         <ButtonLink to="/inscrever-se">BAIXE O SPOTIFY FREE</ButtonLink>
      </Container>
   )
}

export default HomeContent
