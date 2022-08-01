import { Container, SmallContainer } from '../style'
import { HeaderStyle, RowHeader } from './style'

export function Header(){
    return(
        <HeaderStyle>
            <Container>
                <SmallContainer>
                    <RowHeader>
                    <img src="https://static.wixstatic.com/media/0e657f_7868811bb6594c55bb005d54f72efdcf~mv2.png/v1/fill/w_236,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_novo_tempo-03.png" alt="logo_ferroviaria_novo_tempo"/>
                    <img src="https://static.wixstatic.com/media/0e657f_ba97d7c1ae8f4ceabd95ead31d088154~mv2.png/v1/fill/w_308,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Prancheta%204.png" alt="logo_novo_tempo"/>
                    </RowHeader>
                </SmallContainer>
            </Container>
        </HeaderStyle>
    )
}