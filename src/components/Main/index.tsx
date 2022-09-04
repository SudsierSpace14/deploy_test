import { Container, MediumContainer, Row } from '../style'
import { Aside, MainContainer, SlideContainer, SlideItem } from './style'
import { CCarousel, CImage } from '@coreui/react'

const slideImages = [
    'https://static.wixstatic.com/media/0e657f_9976ce8fb2ad49afac0a1401291ea9a4~mv2.jpg/v1/fill/w_723,h_339,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e657f_9976ce8fb2ad49afac0a1401291ea9a4~mv2.jpg',
    'https://static.wixstatic.com/media/0e657f_d2838c9abe204da596a8e638ed2c0e5b~mv2.jpg/v1/fill/w_491,h_253,al_c,lg_1,q_90/0e657f_d2838c9abe204da596a8e638ed2c0e5b~mv2.webp',
    'https://static.wixstatic.com/media/0e657f_92067de1a02440ab978f531533eeb3d8~mv2.jpg/v1/fill/w_740,h_552,al_c,q_90/0e657f_92067de1a02440ab978f531533eeb3d8~mv2.webp'
]

export function Main(){
    return(
        <MainContainer>
            <Container>
                <MediumContainer>
                    <Row style={{gap: 20}}>
                        <SlideContainer>
                            <CCarousel controls indicators>
                                {slideImages.map((img, id) => (
                                    <SlideItem key={id}>
                                        <CImage src={img} alt={`slide ${id}`} />
                                    </SlideItem>
                                ))}
                            </CCarousel>
                        </SlideContainer>
                        <Aside background='https://static.wixstatic.com/media/0e657f_6f1b0c45a0464e9a821d322f3f880287~mv2.png/v1/fill/w_241,h_339,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0e657f_6f1b0c45a0464e9a821d322f3f880287~mv2.png'></Aside>
                    </Row>
                </MediumContainer>
            </Container>
        </MainContainer>
    )
}