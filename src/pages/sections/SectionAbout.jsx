import styled from 'styled-components';

const Content = styled.section`	

        p{
            
            font-size: 2rem;
            margin-bottom: 1rem;
            word-spacing: .3rem;
            font-family: monospace;
        }

        span{
            font-size:2.4rem
        }

        @media(max-width:850px){
            p{
                font-size: 1.875rem;
                max-width: 600px;
                margin-inline:auto;
            }

            span{
                font-size:2rem
            }

        }

        `

export function SectionAbout() {



    return (
        <Content id='sobre'>
            <h4 className="subtitle glow">Sobre</h4>
            <p>Em 2021, através do programa "Jovem Programador" oferecido pelo Senac, dei meus primeiros passos como desenvolvedor de software. Aprendi um pouco de POO, Java e bancos de dados.</p>
            <p>2 anos depois, iniciei minha carreira como desenvolvedor Fullstack. Construí algumas API´s REST e interfaces usando Node.js e React.</p>
            <p>Hoje estou no lado Front-end da força: eu gosto da ideia de juntar código e ✨criatividade✨</p>
            <p>Em processo de evolução. Sigo aprendendo coisas novas, mas nunca esquecendo dos fundamentos 📚</p>
            <p>Gosto de gatos 🐈 e One Piece 🏴‍☠️</p>
        </Content>
    )
}