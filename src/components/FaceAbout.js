import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Feedback() {
  return (
    <Container>
        
      <Wrap>
       
        <Right>
            <h1>About Us</h1>
            <p>Since its establishment in 1998 as Prasara Washing Plant (pvt) Ltd., our company has consistently grown and evolved, solidifying its position as the leading washing plant in the textile sector. Under the visionary leadership of Dhammika Hapuarachchige, we have expanded our operations day by day, earning the trust and loyalty of our valued customers. As a testament to our success, we have achieved numerous accolades and certifications that reflect our commitment to excellence.</p>
            <Link to='/about'><button className="button-90" href="/Contact">Read More</button></Link>
            <Image>
            <img src='https://ik.imagekit.io/y5xyemmwee7/assets/images/v4/bg-circle-white.webp' />
            </Image>

            <Image_Two>
            <img src='https://ik.imagekit.io/y5xyemmwee7/assets/images/v4/sqr-dots-white.webp' />
            </Image_Two>
        </Right>

        <Left>
            <img src='https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        </Left>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--main);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
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

        @media only screen and (max-width: 1200px){
          width: 100%;
        }
    }
    

`

const Right = styled.div`
    width: 50%;
    height: 95%;
    padding: 0px 40px;
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