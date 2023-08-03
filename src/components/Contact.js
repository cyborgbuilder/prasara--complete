import React from 'react'
import styled from 'styled-components'
import {  BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FcHome } from "react-icons/fc";
import { FcCellPhone } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
function Contact() {
  return (
    <Container>
      <Head>
        <div></div>
        <img src='https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
      </Head>
      <Body>
        <Wrap>
           <Header>
           <h1>Contact Us</h1>
           </Header>
           
           <Boxes>
            <Box>
              <Up>
                <FcHome className='icons_about'/>
              </Up>
              <Down>
                  <p>Prasara Washing Plant (Pvt) Ltd</p>
                  <p>Negombo road</p>
                  <p>Thambarawila</p>
                  <p>Waikkala</p>
              </Down>
            </Box>

            <Box>
              <Up>
                <FcCellPhone className='icons_about'/>
              </Up>
              <Down>
              <a href='tel:+94114797000'>< BsFillTelephoneFill className='icons_about_2'  /> <h4>(+94) 11 4797000</h4></a>
              <a href='tel:+94768287040'>< BsFillTelephoneFill className='icons_about_2' /> <h4>(+94) 76 8287 040</h4></a>
              <a href='tel:+94768287041'>< BsFillTelephoneFill className='icons_about_2' /> <h4>(+94) 76 8287 041</h4></a>
              <a href='tel:+94768287042'>< BsFillTelephoneFill className='icons_about_2' /> <h4>(+94) 76 8287 042</h4></a>
              </Down>
            </Box>

            <Box>
              <Up>
                <FcInvite className='icons_about'/>
              </Up>
              <Down>
              <a href='mailto: dhammikah@prasarawashing.com'>< FiMail className='icons_about_3' /> <h4>dhammikah@prasarawashing.com</h4></a>
              </Down>
            </Box>
           </Boxes>

           <Map>
          
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6960723402585!2d79.86648911448738!3d7.275382715984663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e90401a964c5%3A0x1d5d44627948953c!2sPrasara%20Washing%20Plant%20Dankotuwa%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1679392159732!5m2!1sen!2slk" width="1500" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </Map>

           
            

            
        </Wrap>
      </Body>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;

`

const Boxes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px 0;


`
const Box = styled.div`
  width: 27%;
  height: 280px;
  margin: 0 50px ;
  

`

const Up = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .icons_about{
    font-size: 70px;
  }



`

const Down = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p{
    margin: 5px 0;
  }
  a{
    display: flex;
    text-decoration: none;
  }
  h4{
    margin: 8px;
  }
  .icons_about_2{
    margin: 6px;
  }

  .icons_about_3{
    margin: 8px;
    font-size: 20px;
  }
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f3f4f5;
    padding: 50px;

    @media only screen and (max-width: 1200px){
      padding: 50px 10px;
    }

`

const Wrap = styled.div`
    width: 95%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;



   

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
  text-align: center;

  @media only screen and (max-width: 1200px){
    font-size: 18px;
    text-align: center;

  }
}

h2{
    text-align: center;
    padding: 50px 0;
    font-size: 40px;
    text-decoration: underline;

    @media only screen and (max-width: 1200px){
        font-size: 28px;
        padding: 20px 0;
      }
}
h3{
    text-align: center;
    

    @media only screen and (max-width: 1200px){
        font-size: 18px;
      }
}

`

const Map = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

`



export default Contact
