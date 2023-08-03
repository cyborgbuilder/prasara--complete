import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
function About() {
  return (
    <Container>
      <Head>
        <div></div>
        <img src='./about3.jpg' />
      </Head>
      <Body>
        <Wrap>
           <Header>
           <h1>About</h1>
            <p>Established in 1998, Prasara Washing Plant
(PVT) LTD has persistently developed and
emerged as one of the leading washing plants
in the industry consolidating its status.
We have expanded our operations over the
years, acquired the trust and loyalty of our
valued customers. As a testament to our
success, we have achieved numerous accolades
that reflect our commitment to excellence.</p>
           
           </Header>
           <Awards>
           <Slot>
                <Upper>
                    <img className='logo_38' src='https://www.transparentpng.com/thumb/award/1ApjuJ-award-amazing-image-download.png' />
                </Upper>
                <Down>
                    <h1>Sri Lanka Entrepreneur of the Year</h1>
                    <p>Silver category</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_38' src='https://www.transparentpng.com/thumb/award/1ApjuJ-award-amazing-image-download.png' />
                </Upper>
                <Down>
                    <h1>Sri Lanka Entrepreneur of the Year</h1>
                    <p>National Gold</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_38' src='https://www.transparentpng.com/thumb/award/1ApjuJ-award-amazing-image-download.png' />
                </Upper>
                <Down>
                    <h1>Takai Akimoto 5s</h1>
                    <p>Merit Award</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_38' src='https://www.transparentpng.com/thumb/award/1ApjuJ-award-amazing-image-download.png' />
                </Upper>
                <Down>
                    <h1>National Safety Award for the safest workplace</h1>
                    <p>Merit Award</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_38' src='https://www.transparentpng.com/thumb/award/1ApjuJ-award-amazing-image-download.png' />
                </Upper>
                <Down>
                    <h1>Provincial Productivity Award</h1>
                    <p>2nd Place</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_38' src='https://www.transparentpng.com/thumb/award/1ApjuJ-award-amazing-image-download.png' />
                </Upper>
                <Down>
                    <h1>Sri Lanka National Quality Award</h1>
                    <p>Winner</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_38' src='https://www.transparentpng.com/thumb/award/1ApjuJ-award-amazing-image-download.png' />
                </Upper>
                <Down>
                    <h1>National Business Excellence Award</h1>
                    <p>Runner Up</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_38' src='https://www.transparentpng.com/thumb/award/1ApjuJ-award-amazing-image-download.png' />
                </Upper>
                <Down>
                    <h1>CNCI Achiever of Industrial Excellence</h1>
                    <p>Gold Award</p>
                </Down>
            </Slot>
           </Awards>


           <Video>
           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/X4FIgdIltGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </Video>
                
        </Wrap>
      </Body>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background: var(--main);
    overflow: hidden;

`


const Head = styled.div`
    width: 100%;
    height: 75vh;

    div{
      width: 100%;
      height: 11vh;
      background: var(--main);
    }

    @media only screen and (max-width: 1200px){
      height: 46vh;
  }

    img{
        width: 100%;
        height: 100%;
    }

`

const Body = styled.div`
    width: 100%;
    display: flex;
    padding: 50px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--main);

`

const Wrap = styled.div`
    width: 95%;
    padding: 30px 0;

   

`

const Header = styled.div`

h1{
  font-size: 70px;
  text-align: center;
  color: var(--sec);

  @media only screen and (max-width: 1200px){
    font-size: 42px;
  }

}

p{

  padding: 50px 0;

  line-height: 2.1rem;
  letter-spacing: 2.1px;
  text-align: center;

  @media only screen and (max-width: 1200px){
    font-size: 16px;
    text-align: center;
  
    padding: 10px;

  }
}

`

const Awards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
    align-items: center;
  flex-wrap: wrap;


`

const Slot = styled.div`
width: 20%;
height: 350px;
padding: 15px;
background: #fff;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
position: relative;
margin: 20px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;



&:hover{
    border: 1px solid #fff;
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
}


@media only screen and (max-width: 1200px){
    width: 40%;
    padding: 10px;
    margin: 10px;
    text-align: center;
    height: 240px;
  }



`

const Upper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    jsutify-content: center;
    //background: url('https://www.pngkit.com/png/detail/21-219040_fila-logo-lambang-fila.png');
    background-size: cover;

    @media only screen and (max-width: 1200px){
      height: 60%;
    }

    &:hover{
        cursor: pointer;


    }

    img{
        width: 100%;
        border-radius: 5px;
    }
    `

    const Down = styled.div`
    height: 30%;

    @media only screen and (max-width: 1200px){
      height: 40%;
    }


    h1{
        color: black;
        font-size: 20px;
        text-align: center;
        letter-spacing: 1.2px;

        @media only screen and (max-width: 1200px){
          font-size: 14px;
        }
      
    }

    p{
        color: black;
        font-size: 12px;
        line-height: 1.2rem;
        text-align: center;
    }

`

const Video = styled.div`
    width: 100%;
    height: 600px;
    margin: 100px 0;

    @media only screen and (max-width: 1200px){
      height: 400px;
      margin: 50px 0;
  }



`

export default About
