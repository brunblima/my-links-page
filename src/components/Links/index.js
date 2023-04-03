import React from 'react'

import {Container, Button} from './styles'

function Links() {
  return (
      <Container>
          <Button href="https://github.com/brunblima/" target="_blank" rel="noreferrer">
             Portfólio
          </Button>
          <Button href="#" target="_blank" rel="noreferrer">
              Em Breve
          </Button>
          <Button href="#" target="_blank" rel="noreferrer">
              Em breve
          </Button>
        </Container>
  )
}

export default Links;
