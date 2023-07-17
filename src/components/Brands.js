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
           <Header>
           <h1>Brands</h1>
           
           </Header>

           <Detail>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           </Detail>

           <Wrap>
            <Slot>
                <Upper>
                    <img src='https://www.pngkit.com/png/detail/21-219040_fila-logo-lambang-fila.png' />
                </Upper>
                <Down>
                    <h1>FILA Brand</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    {/* <img src='https://www.pngkit.com/png/detail/21-219040_fila-logo-lambang-fila.png' /> */}
                </Upper>
                <Down>
                    <h1>FILA Brand</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

   

`

const Header = styled.div`
h1{
  font-size: 70px;
  text-align: center;
  color: var(--sec);
  padding: 30px 0;

  @media only screen and (max-width: 1200px){
    font-size: 42px;
  }

}



`
const Detail = styled.div`
    background: #fff;
    padding: 20px;


    p{

        padding: 10px;
      
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
const Slot = styled.div`
width: 18%;
height: 350px;
padding: 10px 20px;
background: #fff;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
position: relative;
margin: 20px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

&:hover{
  
    transform: scale(1.01);
}


@media only screen and (max-width: 1200px){
    width: 100%;
    padding: 0;
    text-align: center;
    height: 280px;
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
    height: 70%;
    display: flex;
    align-items: center;
    jsutify-content: center;
    background: url('https://www.pngkit.com/png/detail/21-219040_fila-logo-lambang-fila.png');
    background-size: cover;


    &:hover{
        cursor: pointer;
        background: url('https://5.imimg.com/data5/WL/ZW/GG/ANDROID-77803457/product-jpeg-500x500.jpg');
        background-size: cover;

    }

    img{
        width: 100%;
        height: 100%;
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
