import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"


function Sustainability() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    arrows: false
  };
  return (
    <Container>
      {/* <Head>
        <div></div>
        <img src='https://images.pexels.com/photos/1292464/pexels-photo-1292464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
      </Head>
      <Body>
        <Wrap>
           <Header>
           <h1>Sustainability</h1>
            <p>At our facility, we have invested in state-of-the-art machinery that enables us to handle a wide range of textile products with precision and efficiency. Our advanced equipment ensures thorough and effective cleaning while safeguarding the integrity and inherent qualities of the textiles.</p>
            <p>Our dedication to quality is reflected in our meticulous selection of chemicals. We use only top-quality cleaning agents that are gentle yet highly effective, ensuring that your textiles are treated with the utmost care. Our expertise in chemical management guarantees optimal results without compromising on sustainability.</p>
            <p>With a team that combines extensive knowledge, experience, and ongoing education, we have honed our skills to deliver exceptional textile washing services. We stay abreast of industry advancements and incorporate best practices to consistently meet and exceed our customers' expectations.</p>
            <p>Furthermore, our commitment to continuous improvement is underscored by our quantitative studies and rigorous testing. These data-driven analyses enable us to fine-tune our processes, maximize efficiency, and maintain the highest standards of quality control.</p>
            <p>When you choose us for your textile washing needs, you are not only benefiting from our modern machinery, quality chemicals, and expertise but also gaining a trusted partner dedicated to preserving the integrity and inherent values of your textiles. Experience our commitment to excellence and entrust us with your textile washing requirements.</p>
           </Header>
           <Slot>
            <Image>
              <Left>
                <div>
                <h1>Technology</h1>
                </div>
              </Left>
              <Right>
              <Slider {...settings} style={{zindex: '0'}}>
                  <div>
                    <img src='/env.jpg' />
                  </div>

                  <div>
                    <img src='/tech2.jpg' />
                  </div>

                  <div>
                    <img src='/tech3.jpg' />
                  </div>

                  <div>
                    <img src='/env4.jpg' />
                  </div>
                </Slider>
                
              </Right>
            </Image>
            <Description>

              <p>Our commitment to utilizing the world's highest technology sets us apart in the industry. With advanced production planning systems, we ensure optimal efficiency and precision throughout the manufacturing process. This technology-driven approach allows us to streamline operations and deliver consistent, high-quality results for our valued customers.</p>
              <p>Safety is of paramount importance to us, which is why we exclusively source the best and safest chemicals available worldwide. Through rigorous evaluation and adherence to our Chemical Management System, we guarantee the accuracy, safety, and quality of chemical usage, prioritizing the well-being of our employees, customers, and the environment.</p>
              <p>Embracing automation and computerization, our manufacturing process is seamlessly integrated with over 50 computerized machines and 50 individual computers. This state-of-the-art infrastructure ensures a level of accuracy and reliability that minimizes errors and omissions, leading to superior product outcomes and customer satisfaction.</p>
              <p>With our technologically advanced systems, commitment to safety, and full automation, you can trust us to deliver products of exceptional quality, reliability, and precision. Experience the benefits of our cutting-edge approach and the peace of mind that comes with working with a company at the forefront of technology-driven manufacturing.</p>

            </Description>
           </Slot>

           <Slot>
            <Image>
            <Left>
                <div>
                <h1>Environment</h1>
                </div>
              </Left>
              
              <Right>
                <Slider {...settings} style={{zindex: '0'}}>
                  <div>
                    <img src='/sus.jpg' />
                  </div>

                  <div>
                    <img src='/tech.jpg' />
                  </div>

                  <div>
                    <img src='/env5.jpg' />
                  </div>

                  <div>
                    <img src='/env6.jpg' />
                  </div>
                </Slider>
                
              </Right>

              
            </Image>
            <Description>

              <p>Our commitment to the well-being of our employees is ingrained in our organizational environment. We prioritize the mental and physical satisfaction of our team members, fostering a supportive and inclusive workplace that promotes their overall happiness and fulfillment. By prioritizing employee satisfaction, we cultivate a positive work culture that drives productivity and innovation.</p>
              <p>As a fully eco-friendly region, we take our environmental responsibilities seriously. Our adherence to national standards and international conventions is a testament to our dedication to sustainability. We have obtained membership and actively participate in initiatives that promote environmental stewardship, ensuring that our operations align with the highest global standards.</p>
              <p>At our company, customer safety is paramount. We go above and beyond to provide a safe and secure environment for our customers and their products. Our stringent safety protocols and quality assurance measures guarantee that our customers' trust is well-placed, allowing them to have complete peace of mind when working with us.</p>
              <p>Our commitment to environmentally friendly practices has been recognized internationally through prestigious awards. We have received accolades for our exemplary energy management and waste management practices, reinforcing our position as a leader in sustainable operations. These awards underscore our ongoing efforts to minimize our environmental impact and drive positive change within our industry.</p>
              <p>Choose us as your trusted partner, and experience the benefits of an organization that prioritizes employee satisfaction, customer safety, and environmental excellence. Our track record of success and commitment to sustainable practices make us the ideal choice for your needs.</p>

            </Description>
           </Slot>
            
        </Wrap>
      </Body> */}
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background: var(--main);

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

  }
}

`

const Slot = styled.div`
    width: 100%;

`

const Image = styled.div`
  display: flex;
  padding-top: 50px;
  position: relative;
 
  
    p{
      font-size: 23px;
      line-height: 2.1rem;
      letter-spacing: 2.1px;
    
      @media only screen and (max-width: 1200px){
        font-size: 18px;
        text-align: center;
      }
    }

`

const Description = styled.div`
    width: 100%;
    padding: 50px 0;

    p{

      padding: 10px;
      line-height: 2.1rem;
      letter-spacing: 2.1px;
      text-align: left;
    
      @media only screen and (max-width: 1200px){
        font-size: 16px;
        text-align: center;


      }
    }


   

`

const Left = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    
    @media only screen and (max-width: 1200px){
      width: 0%;
      //justify-content: center;
      top: 40%;
    left: 50%;
  }

    div{
      z-index: 1;
      width: 100%;
      height: 200px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      

      @media only screen and (max-width: 1200px){
        width: 100%;
        height: 190px;
    }

    }

    h1{
      
      font-size: 60px;
      text-align: center;
      color: var(--sec);
  
      @media only screen and (max-width: 1200px){
          font-size: 32px;
        }
    }


`


const Right = styled.div`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px; 

    @media only screen and (max-width: 1200px){
      width: 100%;
    }

    img{
      height: 100%;
    }

    div{
      z-index: 0;
    }

    
    

    img{
      width: 100%;
      border-radius: 5px;
    }

    
`

export default Sustainability
