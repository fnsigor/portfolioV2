import styled, { ThemeProvider } from 'styled-components';
import colors, { GlobalStyle } from '../GlobalStyles';
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import whatsapp from '../assets/whatsapp.svg'
import email from '../assets/email.svg'




const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 100%;



    position: absolute;
    bottom: 50px;
    

    .ul-sections{
        display: flex;
        gap: 5rem;
        font-family: "Cyberfunk", monospace;
        font-size: 3rem;
    }
    
    .ul-sections a{
        transition: .1s;
    }

    .ul-sections a:hover{
        text-shadow:${props => props.theme.neonTextShadow};
    }

    .ul-icons{
       display: flex;
       gap: 5rem;
    }

    .ul-icons img{
        height:35px;
        width:35px;
        filter: invert();
    }

`




export function DesktopMenu() {

    return (

        <ThemeProvider theme={colors}>
            <NavBar>
                <ul className="ul-sections">
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
                <ul className='ul-icons'>
                    <li>
                        <a href="https://github.com/fnsigor" target="_blank">
                            <img src={github} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/fnsigor" target="_blank">
                            <img src={linkedin} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5548984489254?text=Olá,%20vim%20através%20do%20seu%20portfólio!" target="_blank">
                            <img src={whatsapp} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://mailto:igorfernamdez@gmail.com" target="_blank">
                            <img src={email} alt="" />
                        </a>
                    </li>

                </ul>
            </NavBar>
        </ThemeProvider>

    )
}