import React from 'react'
import styled from 'styled-components'
import SocialBooth from './SocialBooth'
function VideoPage() {
  return (
    <Container>
      <video src='./video.mp4' autoPlay muted loop />
      <Arrow>
        <img src='./arrow_down2.png' />
      </Arrow>
      <SocialBooth />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 89vh;
  position: relative;


  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const Arrow = styled.div`
  width: 5%;
  position: absolute;
  bottom: 30px;
  left: 48%;
  animation: example 2s infinite linear;

  @media only screen and (max-width: 1200px){
    width: 24%;
    left: 40%;
  }
  img{
    width: 100%;
  }
`
export default VideoPage
