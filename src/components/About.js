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
                    <img className='logo_38' src='https://logovectorseek.com/wp-content/uploads/2021/10/walbusch-walter-busch-gmbh-und-co-kg-logo-vector.png' />
                </Upper>
                <Down>
                    <h1>Walbusch</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>
           </Awards>
                
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

  padding: 10px;

  line-height: 2.1rem;
  letter-spacing: 2.1px;
  text-align: left;

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
  flex-wrap: wrap;


`

const Slot = styled.div`
width: 20%;
height: 350px;
padding: 7px;
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
    height: 180px;
  }


h1{
    color: #fff;
    font-size: 36px;
    padding: 10px 0;
    z-index: 1000;
    border-bottom: 1px solid white;

    @media only screen and (max-width: 1200px){
        font-size: 30px;
        padding: 10px 0;
    }
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


    h1{
        color: black;
        font-size: 20px;
        text-align: center;
        letter-spacing: 1.2px;
    }

    p{
        color: black;
        font-size: 12px;
        line-height: 1.2rem;
        text-align: center;
    }

`

export default About
