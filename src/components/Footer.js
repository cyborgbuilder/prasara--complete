import React from 'react'
import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
function Footer() {
  return (
    <Container>
      <Wrap>
      <div>
        
        <img src='./logo1.jpg' /> 
        <p>All rights reserved Prasara Washing Plant (Pvt) Ltd</p>
      </div>
      <div>
      <FaFacebook className='icons' />
        <FaYoutube className='icons'/>
        <p>Negombo Road, Thabarawila, Waikkala <br></br>Sri Lanka</p>
      </div>
      <Last>
      <FaDiscord className='icons'/>
        <h6>Developed by cyborgbuilder</h6>
         
      </Last>
      
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 130px;
    background: var(--sec);
    display: flex;
    align-items: center;
    justify-content: center;
    

`

const Wrap = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1200px){
      flex-direction: column;
      padding: 20px 0;
    }

    p{
        color: #fff;
        font-size: 12px;
        padding-top: 5px ;
        margin-top: 15px ;
        border-top: 1px solid #fff;
        text-align: center;
    }

    img{
        width: 9%;
        border-radius: 15%;
    }
    .icons{
        color: #fff;
        font-size: 32px;
        margin-right:  8px; 
    }
    h6{
        font-family: 'Libre Barcode 128 Text', cursive;
        color: #fff;
        font-size: 23px;
        margin: 10px 0;
    }

`

const Last = styled.div`
@media only screen and (max-width: 1200px){
  display: none;
}

`

export default Footer
