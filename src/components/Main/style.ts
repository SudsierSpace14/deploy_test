import styled from 'styled-components'
import { CCarousel, CCarouselItem } from '@coreui/react'

export const MainContainer = styled.main`
    margin-top: 25px;
    height: 480px;

    *{
        height: 100%;
    }
`
export const SlideContainer = styled.article`
    flex: 1;
    max-width: 75%;
    /* background: url("https://static.wixstatic.com/media/0e657f_9976ce8fb2ad49afac0a1401291ea9a4~mv2.jpg/v1/fill/w_723,h_339,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e657f_9976ce8fb2ad49afac0a1401291ea9a4~mv2.jpg"); */
    background-repeat: no-repeat;
    background-size: cover;

    .carousel-indicators{
        align-items: flex-end;
    }
    .carousel-indicators [data-coreui-target]{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 2px solid #141;
    }
`
export const SlideItem = styled(CCarouselItem)`

`

interface AsideProps{
    background: string
}
export const Aside = styled.aside<AsideProps>`
    flex-basis: 23%;
    background: ${props => props.background ? `url(${props.background})` : 'none'};
    background-repeat: no-repeat;
    background-size: cover;
`