import React from 'react'
import styled from 'styled-components'

function Certify() {
  return (
    <Container>
      <Wrap>
        <Left>
            <h1>certified washing plant services</h1>
            <p>Experience peace of mind with our certified washing plant services. We are proud to be an accredited provider, committed to upholding the highest industry standards. With our services, you can rest assured that your operations will receive exceptional quality, efficiency, and environmental compliance. Our team is dedicated to delivering top-notch results, utilizing state-of-the-art equipment and expert knowledge to ensure the utmost satisfaction. Whether you require thorough cleaning, maintenance, or repairs, our washing plant services are designed to meet your specific needs. Trust us to handle your operations with the utmost care and professionalism, providing you with the peace of mind you deserve.</p>
        </Left>
        <Right>
        <Slot>
          <img src='./c1.png' />
        </Slot>
        <Slot>
        <img src='./c2.png' />
        </Slot>
        <Slot>
        <img src='./c3.png' />
        </Slot>
        <Slot>
        <img src='./c4.png' />
        </Slot>
        <Slot>
        <img src='./c5.png' />
        </Slot>
        <Slot>
        <img src='https://uploads-ssl.webflow.com/5f70b3b7a85b92350dd091ab/5f70b773f2db05216e2a3ef7_Platform-Gateway_smaller.png' />
        </Slot>
        {/* <Slot>
        <img src='./c7.png' />
        </Slot> */}
        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 70vh;
    background: var(--main);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;

`
const Left = styled.div`
    padding: 20px;
    padding: 50px 0;

    h1{
        color: var(--sec);
        text-transform: uppercase;
        font-size: 36px;
        padding: 40px 0;
        text-align: center;
        letter-spacing: 1.3px;

        @media only screen and (max-width: 1200px){
            font-size: 30px;
            padding: 10px 0;
        }
    }

    p{
        text-align: center;
        color: #585858;
        line-height: 2.1rem;

        @media only screen and (max-width: 1200px){
            font-size: 16px;
          }
    }

`

const Right = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const Slot = styled.div`
    width: 200px; 
    height: 200px;
    border-radius: 5px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media only screen and (max-width: 1200px){
        width 120px;
        height: 120px;
        margin: 10px 15px;
    }

    img{
      width: 80%;
  }

`

export default Certify