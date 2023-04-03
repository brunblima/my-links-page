import React from 'react'

import { BsInstagram, BsLinkedin, BsSpotify, BsTelegram, BsGithub } from "react-icons/bs";

import { Container, SocialMedia } from './styles'

function Social() {



  return (

      <Container>
          <SocialMedia><a href="https://www.instagram.com/brunblima" target="_blank" rel="noreferrer"> <BsInstagram size='30'/> </a></SocialMedia>
          <SocialMedia><a href="https://www.linkedin.com/in/brunblima/" target="_blank" rel="noreferrer"> <BsLinkedin color='#0a66c2' size='30'/> </a></SocialMedia>
          <SocialMedia><a href="https://open.spotify.com/user/brunoblima1" target="_blank" rel="noreferrer"> <BsSpotify color='#1ed760' size='30'/> </a></SocialMedia>
          <SocialMedia><a href="https://t.me/brunblima" target="_blank" rel="noreferrer"> <BsTelegram color='#0088cc' size='30'/> </a></SocialMedia>
          <SocialMedia><a href="https://www.github.com/brunblima" target="_blank" rel="noreferrer"> <BsGithub size='30'/> </a></SocialMedia>
      </Container>
  )
}

export default Social
