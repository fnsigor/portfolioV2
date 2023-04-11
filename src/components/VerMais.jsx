import styled, { ThemeProvider } from 'styled-components';
import vermais from '../assets/vermais.png'
import { Link } from 'react-router-dom';
const Content = styled.div`

     
        height: 100%;
        position: relative;
  


        .bg{
            background-repeat: no-repeat;
            background-size: cover;

            width: 100%;
            height: 100%;

            position: absolute;
            content: "";

            filter: blur(4px) brightness(40%);
        }

        .content{
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 2rem;
         

            h5{
                font-size:2.5rem;
                margin-bottom: 4rem;
                text-transform: uppercase;
                word-spacing: 5px;
            }

        
            p{
                font-size:2.2rem;
                flex-grow: 1;
                font-family: monospace;
                text-transform: uppercase;
            }

            div.links{
                display: flex;
                justify-content:space-between;

                
                position: absolute;
                left: 0;
                bottom: 2rem;
                
                width: 100%;
                padding-inline: 2rem;
            }


            a{
                font-size:2rem;
                font-family: monospace;
                text-transform: uppercase;
                transition: .3s;
            }

            a:hover{
                text-shadow: ${props => props.theme.neonTextShadow};
            }

        }


`


export function VerMais({ project }) {


    return (
        <Content >
            <div className="bg" style={{ backgroundImage: `url(${vermais})` }}>
            </div>
            <div className="content">
                <h5>outros projetos</h5>
                <p>Achou que era só isso? <br /> Existem muitos outros projetos feitos, bora dar uma olhada!</p>
                <div className="links">
                    <Link to="/projects">Ver mais projetos</Link>
                </div>
            </div>

        </Content>


    )
}