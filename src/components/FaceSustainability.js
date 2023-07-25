import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Feedback() {
  return (
    <Container>
        
      <Wrap>
        <Left>
            <img src='https://static.vecteezy.com/packs/media/components/home/unlock-vecteezy/img/find-your-path-vector-e997dd4d07a6859d9a9f9c40f6140b57.jpg' />
        </Left>
        <Right>
            <h1>Environmental Stewardship</h1>
            <p>We are proud to offer a washing plant that combines state-of-the-art machinery, top-quality chemicals, and a team of highly skilled professionals with a wealth of knowledge and experience. With our comprehensive range of capabilities, we are equipped to handle any textile product, ensuring exceptional quality while preserving their inherent values.</p>
            <Link to='/contact'><button className="button-90" href="/Contact">Read More</button></Link>
            <Image>
            <img src='https://ik.imagekit.io/y5xyemmwee7/assets/images/v4/bg-circle-white.webp' />
            </Image>

            <Image_Two>
            <img src='https://ik.imagekit.io/y5xyemmwee7/assets/images/v4/sqr-dots-white.webp' />
            </Image_Two>
        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 75vh;
    background: var(--main);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    overflow: hidden;

    @media only screen and (max-width: 1200px){
        padding: 50px 0;
        height: 120vh;
      }
`
const Image = styled.div`
    width: 100%;
    position: absolute;
    top: 0%;
    left: 80%;
    z-index: 0;

    @media only screen and (max-width: 1200px){
        left: 40%;
      }


    img{
        width: 25%;

        @media only screen and (max-width: 1200px){
            width: 30%;
          }
    }

`

const Image_Two = styled.div`
    width: 100%;
    position: absolute;
    bottom: -2%;
    left: 80%;
    z-index: 0;

    @media only screen and (max-width: 1200px){
        left: 50%;
      }

    img{
        width: 19%;

        @media only screen and (max-width: 1200px){
            width: 30%;
          }
    }

`
const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    

    @media only screen and (max-width: 1200px){
        flex-direction: column;
      }

`
const Left = styled.div`
    width: 50%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    //margin: 30px 0;

    @media only screen and (max-width: 1200px){
        width: 100%;
      }

    img{
        width: 95%;
        height: 100%;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    

`

const Right = styled.div`
    width: 50%;
    height: 95%;
    padding: 30px 40px;
    background: var(--sec);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    position: relative;
    

    @media only screen and (max-width: 1200px){
        width: 100%;
        padding: 10px;
        text-align: center;
        margin: 40px 0;
      }

    p{
        line-height: 1.8rem; 
        color: #fff;
        z-index: 100;

        @media only screen and (max-width: 1200px){
            font-size: 16px;
          }
    }

    h1{
        color: #fff;
        font-size: 36px;
        padding: 40px 0;
        z-index: 1000;

        @media only screen and (max-width: 1200px){
            font-size: 30px;
            padding: 10px 0;
        }
    }
    button{
        margin: 30px 0;
        z-index: 1000;
    }
`

export default Feedback