import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
function About() {
  return (
    <Container>
      <Head>
        <div></div>
        <img src='./brands.png' />
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
                <img className='logo_2' src='https://logos-world.net/wp-content/uploads/2022/11/Abercrombie-and-Fitch-Emblem.png' />
                </Upper>
                <Down>
                    <h1>Abercrombie and Fitch</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

           

            <Slot>
                <Upper>
                    <img className='logo_3' src='https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png' />
                </Upper>
                <Down>
                    <h1>Adidas</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_4' src='https://pngimg.com/uploads/amazon/amazon_PNG7.png' />
                </Upper>
                <Down>
                    <h1>amazon</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_5' src='https://1000logos.net/wp-content/uploads/2020/06/American-Eagle-Logo-1985.jpg' />
                </Upper>
                <Down>
                    <h1>American Eagle</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_6' src='https://download.logo.wine/logo/ASOS_(retailer)/ASOS_(retailer)-Logo.wine.png' />
                </Upper>
                <Down>
                    <h1>asos</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>
            
            <Slot>
                <Upper>
                    <img className='logo_7' src='https://seeklogo.com/images/A/atg-glove-logo-FFE6E3D9F9-seeklogo.com.png' />
                </Upper>
                <Down>
                    <h1>atg</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_8' src='https://logos-world.net/wp-content/uploads/2020/05/Calvin-Klein-Logo.png' />
                </Upper>
                <Down>
                    <h1>Calvin Klein</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_9' src='https://1000logos.net/wp-content/uploads/2020/03/Columbia-logo.png' />
                </Upper>
                <Down>
                    <h1>Columbia</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_10' src='https://logos-world.net/wp-content/uploads/2020/12/Dockers-Logo-2005-2018.png' />
                </Upper>
                <Down>
                    <h1>Dockers</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_11' src='https://www.logolynx.com/images/logolynx/5c/5c9b27f6b72e469d906de452323197f6.png' />
                </Upper>
                <Down>
                    <h1>Eddie Bauer</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_12' src='https://logos-world.net/wp-content/uploads/2020/09/Fila-Logo.png' />
                </Upper>
                <Down>
                    <h1>FILA</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_13' src='https://logos-world.net/wp-content/uploads/2020/09/Gap-Logo.png' />
                </Upper>
                <Down>
                    <h1>G A P</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_14' src='https://searchlogovector.com/wp-content/uploads/2020/03/gerry-weber-logo-vector.png' />
                </Upper>
                <Down>
                    <h1>Gerry Weber</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_15' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Guess_logo.svg/2560px-Guess_logo.svg.png' />
                </Upper>
                <Down>
                    <h1>Guess</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_16' src='https://assets.stickpng.com/images/585990604f6ae202fedf28d3.png' />
                </Upper>
                <Down>
                    <h1>H & M</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_17' src='https://logos-world.net/wp-content/uploads/2021/01/Helly-Hansen-Logo.png' />
                </Upper>
                <Down>
                    <h1>H / H</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_18' src='https://logos-world.net/wp-content/uploads/2021/01/Helly-Hansen-Logo.png' />
                </Upper>
                <Down>
                    <h1>H / H</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_19' src='https://download.logo.wine/logo/Hurley_International/Hurley_International-Logo.wine.png' />
                </Upper>
                <Down>
                    <h1>Hurley</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_20' src='https://assets.stickpng.com/images/5a1ac619f65d84088faf1349.png' />
                </Upper>
                <Down>
                    <h1>Jack Wills</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_21' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/L.L.Bean_wordmark.svg/1024px-L.L.Bean_wordmark.svg.png' />
                </Upper>
                <Down>
                    <h1>L.L. Bean</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_22' src='https://www.landsend.com/newsroom/multimedia/logos/images/2018-le-logo.png' />
                </Upper>
                <Down>
                    <h1>Land's end</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_23' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Levis-logo-quer.svg/2560px-Levis-logo-quer.svg.png' />
                </Upper>
                <Down>
                    <h1>Levi's</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            
            <Slot>
                <Upper>
                    <img className='logo_24' src='https://logos-download.com/wp-content/uploads/2016/08/Lululemon_logo.png' />
                </Upper>
                <Down>
                    <h1>lululemon</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_25' src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Macy%27s_Logo_2019.png' />
                </Upper>
                <Down>
                    <h1>macy's</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_26' src='https://1000logos.net/wp-content/uploads/2022/08/Marks-Spencer-logo.jpg' />
                </Upper>
                <Down>
                    <h1>Marks and Spencer</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_27' src='https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Next_2007-_logo.svg/2560px-Next_2007-_logo.svg.png' />
                </Upper>
                <Down>
                    <h1>next</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_28' src='https://www.edigitalagency.com.au/wp-content/uploads/nike-logo-png-black-icon-white-background-large.png' />
                </Upper>
                <Down>
                    <h1>Nike</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_29' src='https://download.logo.wine/logo/Old_Navy/Old_Navy-Logo.wine.png' />
                </Upper>
                <Down>
                    <h1>Old Navy</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_30' src='https://searchlogovector.com/wp-content/uploads/2019/08/oshkosh-bgosh-logo-vector.png' />
                </Upper>
                <Down>
                    <h1>Oshkosh B'gosh</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_31' src='https://www.pngmart.com/files/23/Patagonia-Logo-PNG-HD.png' />
                </Upper>
                <Down>
                    <h1>Patagonia</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_32' src='https://assets.stickpng.com/images/58429f58a6515b1e0ad75aec.png' />
                </Upper>
                <Down>
                    <h1>Polo</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_33' src='https://www.bgf.co.uk/wp-content/uploads/2018/09/Untitled-design-30.png' />
                </Upper>
                <Down>
                    <h1>Seasalt Cornwall</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_34' src='https://assets.stickpng.com/images/584290c7a6515b1e0ad75ac4.png' />
                </Upper>
                <Down>
                    <h1>Tesco</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_35' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tommy_Hilfiger_Logo.png/2560px-Tommy_Hilfiger_Logo.png' />
                </Upper>
                <Down>
                    <h1>Tommy Hilfiger</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_36' src='https://logos-download.com/wp-content/uploads/2018/08/Van_Heusen_logo_fasion.png' />
                </Upper>
                <Down>
                    <h1>Van Huessen</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_37' src='https://assets.stickpng.com/images/58429fc2a6515b1e0ad75af0.png' />
                </Upper>
                <Down>
                    <h1>Victoria's Secret</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_38' src='https://logovectorseek.com/wp-content/uploads/2021/10/walbusch-walter-busch-gmbh-und-co-kg-logo-vector.png' />
                </Upper>
                <Down>
                    <h1>Walbusch</h1>
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
width: 20%;
height: 380px;
padding: 10px 20px;
background: #fff;
border-radius: 5px;
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
    
    .logo_3:hover{
        height: 100%;
        content: url("https://images.asos-media.com/products/adidas-originals-adicolor-t-shirt-dress-in-black/23470061-1-black?$n_640w$&wid=513&fit=constrain");
    }
    .logo_2:hover{
        height: 100%;
        content: url("https://i.pinimg.com/1200x/1a/ed/fb/1aedfb8446297d969f233130ec3ef527.jpg");
    }
    .logo_4:hover{
        height: 100%;
        content: url("https://media.glamour.es/photos/636500a67349afa4740b1764/4:3/w_5175,h_3881,c_limit/AMAZON%20FASHION%20X%20GMILLET_GROUP%201_1765.jpg");
    }
    .logo_5:hover{
        height: 100%;
        content: url("https://s7d2.scene7.com/is/image/aeo/0181_3181_001_l1?$pdp-md-opt$&fmt=webp");
    }
    .logo_6:hover{
        height: 100%;
        content: url("https://content.asos-media.com/-/media/images/articles/responsible-fashion/homepage/dt_landingpage_620x487px_product.jpg");
    }
    .logo_7:hover{
        height: 100%;
        content: url("https://www.mdsassociates.com/content/images/gloves_gen_purpose/10295564_1255398611142527_7073071497476198978_o.jpg");
    }
    .logo_8:hover{
        height: 100%;
        content: url("https://images.asos-media.com/products/calvin-klein-jeans-institutional-logo-slim-fit-t-shirt-in-black/203857638-1-black?$n_750w$&wid=750&hei=750&fit=crop");
    }
    .logo_9:hover{
        height: 100%;
        content: url("https://www.columbiasportswear.ph/img/cms/Tech/kv-tech-top-m.jpg");
    }
    .logo_10:hover{
        height: 100%;
        content: url("https://www.tradeinn.com/f/13694/136943195/dockers-logo-short-sleeve-t-shirt.jpg");
    }
    .logo_11:hover{
        height: 100%;
        content: url("https://eddiebauer.scene7.com/is/image/EddieBauer/D0332534_100C1?$748V1$");
    }
    .logo_12:hover{
        height: 100%;
        content: url("https://www.fila.de/out/pictures/generated/product/1/740_740_100/fila_nik_oversized_tee_black_6450424_1146.jpg");
    }
    .logo_13:hover{
        height: 100%;
        content: url("https://d010204.bibloo.cz/_galerie/varianty/207/2070636-z.jpg");
    }
    .logo_14:hover{
        height: 100%;
        content: url("https://pic.gerryweber.com/static/i/1_160046-31404_99700_104/pdmain/shirt-104.jpg");
    }
    .logo_15:hover{
        height: 100%;
        content: url("https://img.guess.com/image/upload/f_auto,q_auto:eco,fl_strip_profile,dpr_1.5,fl_advanced_resize,fl_progressive,w_392,c_scale/v1/NA/Style/ECOMM/M83I28J1300-G7V2-ALT1");
    }
    .logo_16:hover{
        height: 100%;
        content: url("https://publish.purewow.net/wp-content/uploads/sites/2/2020/07/h-m-roses.jpg?fit=680%2C860");
    }
    .logo_17:hover{
        height: 100%;
        content: url("https://www.shopatanna.com/cdn/shop/products/S2A7866_600x@2x.jpg?v=1665142233");
    }
    .logo_18:hover{
        height: 100%;
        content: url("https://www.shopatanna.com/cdn/shop/products/S2A7866_600x@2x.jpg?v=1665142233");
    }
    .logo_19:hover{
        height: 100%;
        content: url("https://imgix.bustle.com/uploads/image/2022/6/13/55365940-f127-4516-8c3f-bc2ec39b95f7-287603741_348273004102370_2430941315135653359_n.jpg?w=414&h=518&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.448&fp-y=0.2271");
    }
    .logo_20:hover{
        height: 100%;
        content: url("https://images.asos-media.com/products/jack-wills-westmore-wills-logo-t-shirt-in-khaki/7858668-1-khaki048?$n_750w$&wid=750&hei=750&fit=crop");
    }
    .logo_21:hover{
        height: 100%;
        content: url("https://cdni.llbean.net/is/image/wim/517591_0_46?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2");
    }
    .logo_22:hover{
        height: 100%;
        content: url("https://www.landsend.com/article/how-to-create-a-nautical-wardrobe/images/feat-m.jpg");
    }
    .logo_23:hover{
        height: 100%;
        content: url("https://static-01.daraz.lk/p/068b96df0cc88994f70477366bcf07da.jpg");
    }
    .logo_24:hover{
        height: 100%;
        content: url("https://images.lululemon.com/is/image/lululemon/LM3DN2S_1966_1");
    }
    .logo_25:hover{
        height: 100%;
        content: url("https://www.aboutapparels.com/media/catalog/product/cache/1/thumbnail/400x/17f82f742ffe127f42dca9de82fb58b1/n/e/new-latest-stylish-men-rose-printed-t-shirt-aa-3107-_2_.jpg");
    }
    .logo_26:hover{
        height: 100%;
        content: url("https://asset1.cxnmarksandspencer.com/is/image/mands/Pure-Cotton-Printed-Straight-Fit-T-Shirt-3/SD_01_T41_9607_ZZ_X_EC_1?$PDP_IMAGEGRID_1_LG$");
    }
    .logo_27:hover{
        height: 100%;
        content: url("https://cdn-images.farfetch-contents.com/19/12/89/49/19128949_42127530_1000.jpg");
    }
    .logo_28:hover{
        height: 100%;
        content: url("https://static-01.daraz.lk/p/0208d598cffc216add321aba82e03546.jpg");
    }
    .logo_29:hover{
        height: 100%;
        content: url("https://dynamic.zacdn.com/7ha6MD2ynUX80Kc1LfOU5Z8BJsI=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/old-navy-7529-7712332-1.jpg");
    }
    .logo_30:hover{
        height: 100%;
        content: url("https://www.jennsblahblahblog.com/wp-content/uploads/2014/12/ok_H14_fleece_A_091_M-600.jpg");
    }
    .logo_31:hover{
        height: 100%;
        content: url("https://origin.go.gq.com.au/wp-content/uploads/2019/04/main-28.jpg");
    }
    .logo_32:hover{
        height: 100%;
        content: url("https://teessl.shophere.lk/wp-content/uploads/2021/08/IMG-4729.jpg");
    }
    .logo_33:hover{
        height: 100%;
        content: url("https://www.seasaltcornwall.com/media/catalog/product/b/-/b-wm27108-28707_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=795&width=530&canvas=530:795");
    }
    .logo_34:hover{
        height: 100%;
        content: url("https://digitalcontent.api.tesco.com/v2/media/homepage/326ff904-43b0-4ff3-adce-a093841718d1/2312-FF-Mens-Portrait-Hub-2.jpeg");
    }
    .logo_35:hover{
        height: 100%;
        content: url("https://images.asos-media.com/products/tommy-hilfiger-t-shirt-in-navy/203798013-1-navy?$n_640w$&wid=513&fit=constrain");
    }
    .logo_36:hover{
        height: 100%;
        content: url("https://i5.walmartimages.com/asr/5ccc675b-a587-4522-8f75-1041525477ba_1.9a28abb473bf725aa0b9e1ebcbf6fff7.jpeg");
    }
    .logo_37:hover{
        height: 100%;
        content: url("https://www.victoriassecretbeauty.com.au/on/demandware.static/-/Sites-vs-master-panties-catalog/default/dwe0cc16fc/images/large/111675362Y3B_OM_F.jpg");
    }
    .logo_38:hover{
        height: 100%;
        content: url("https://media.walbusch.at/products/walbusch/images/662x882/OF00_2856_HA.jpg");
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
