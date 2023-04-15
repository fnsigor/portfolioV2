import styled from 'styled-components';
import vermais from '../assets/vermais.png'
import { Link } from 'react-router-dom';
import { Bt } from './IndexProjectCard'


const Content = styled.div`

        height: 100%;
        position: relative;

        .bg{
            background-repeat: no-repeat;
            background-size: cover;
            background-position:center;

            width: 100%;
            height: 100%;

            position: absolute;
            content: "";

            filter: blur(4px) brightness(40%);
        }

        .content{
            height: 100%;
            position: relative;
            border: 2px solid ${props => props.theme.newPurple};
            border-radius: 5px;

            padding: 2rem;
            

            h5{
                font-size:2.5rem;
                margin-bottom: 4rem;
                text-transform: uppercase;
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
                color: #fff;
            }

        }

        @media(max-width:850px){
            
            .content{

                h5{
                    text-align: center;
                    font-size: 1.875rem;
                }

                p{
                    font-size: 1.6rem;
                }

                a{
                    font-size:1.6rem;
                }


                div.links{
                    flex-direction:column;
                    align-items: center;
        
                    bottom: 4rem;
                    
                    padding-inline: 2rem;
                    
                }
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
                    <Bt>
                        <Link to="/projects">Ver mais projetos</Link>
                    </Bt>
                </div>
            </div>

        </Content>


    )
}