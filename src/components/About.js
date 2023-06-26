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
            <p>Since its establishment in 1998 as Prasara Washing Plant (pvt) Ltd., our company has consistently grown and evolved, solidifying its position as the leading washing plant in the textile sector. Under the visionary leadership of Dhammika Hapuarachchige, we have expanded our operations day by day, earning the trust and loyalty of our valued customers. As a testament to our success, we have achieved numerous accolades and certifications that reflect our commitment to excellence.</p>
            <p>In line with our continuous pursuit of growth and improvement, we are proud to announce our expansion under the new name Prasara Washing Dankotuwa (pvt) Ltd. This rebranding signifies our readiness to embrace new opportunities and challenges while remaining true to our core values. Our primary objective is to deliver reliable and high-quality services to our clients, leveraging the latest technologies and industry advancements.</p>
            <p>At Prasara Washing Dankotuwa, we are driven by a passion for customer satisfaction and a dedication to staying at the forefront of the textile industry. Our team is constantly striving to provide innovative solutions and enhance our processes to exceed expectations. With a focus on reliability, quality, and a customer-centric approach, we are poised to continue our remarkable journey of success while upholding the values that have guided us since our inception.</p>
            <p>Choose Prasara Washing Dankotuwa for your textile washing needs and experience our unwavering commitment to excellence, cutting-edge technology, and a customer-centric approach that sets us apart in the industry.</p>
           </Header>
            <Slot>
              <div>
                <h1>Vision</h1>
                <p>To be the most recognised premier organisation
                  in washing and dyeing industry in South Asia</p>
              </div>
              <Images>
            <img src='https://ik.imagekit.io/y5xyemmwee7/assets/images/v4/bg-circle-white.webp' />
            </Images>

            <Image_Two>
            <img src='https://ik.imagekit.io/y5xyemmwee7/assets/images/v4/sqr-dots-white.webp' />
            </Image_Two>
            </Slot>
            


             
                
                <Slot>
                <Images>
            <img src='https://ik.imagekit.io/y5xyemmwee7/assets/images/v4/bg-circle-white.webp' />
            </Images>

            <Image_Two>
            <img src='https://ik.imagekit.io/y5xyemmwee7/assets/images/v4/sqr-dots-white.webp' />
            </Image_Two>
                <h1>Mission</h1>
                <p>To provide highest return to our valuable customers with Innovative
and Continuous Sustainable Improvements of our service.

To become a Green Washing Plant that practices
Globally Recognised Environmental Standards.
</p>
             
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

const Slot = styled.div`
width: 100%;
height: 250px;
padding: 10px 20px;
background: var(--sec);
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
position: relative;
margin-top: 40px;


@media only screen and (max-width: 1200px){
    width: 100%;
    padding: 0;
    text-align: center;
    height: 280px;
  }

p{
    line-height: 1.8rem; 
    color: #fff;
    z-index: 100;
    margin-top: 20px;

    @media only screen and (max-width: 1200px){
        font-size: 16px;
      }
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

const Images = styled.div`
    width: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 0;

    @media only screen and (max-width: 1200px){
        left: 40%;
      }


    img{
        width: 15%;

        @media only screen and (max-width: 1200px){
            width: 30%;
          }
    }

`

const Image_Two = styled.div`
    width: 100%;
    position: absolute;
    bottom: 2%;
    left: 91%;
    z-index: 0;

    @media only screen and (max-width: 1200px){
        left: 50%;
      }

    img{
        width: 10%;

        @media only screen and (max-width: 1200px){
            width: 30%;
          }
    }

`

const Slot_Two = styled.div`

width: 100%;
    height: 300px;
    border-radius: 10px;
    background: url('https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    //background: #fff;
    padding: 20px;
    margin: 50px 0;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

    
    h1{
      font-size: 40px;
      color: #fff;

      @media only screen and (max-width: 1200px){
        font-size: 30px;
    }
    }
    p{
      font-size: 20px;
      padding: 20px 0;
      color: #fff;
      line-height: 3rem;
      letter-spacing: 2.1px;
      font-weight: 600;

  @media only screen and (max-width: 1200px){
    font-size: 18px;
    line-height: 2.5rem;
}
    }
`

const Image = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
      width: 50%;
    }
`

const Content = styled.div`
 border-left: 1px solid var(--third);
      //border-bottom: 1px solid var(--third);
      padding: 0 20px;

      

`

export default About
