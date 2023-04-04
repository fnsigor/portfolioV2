import styled from 'styled-components';

const Content = styled.section`	

        p{
            margin-inline: auto;
            font-size: 1.8rem;
            margin-bottom: 1rem;
            width: 50%;
            word-spacing: .3rem;
            line-height: 2rem
        }

        span{
            font-family: monospace;
            font-size:2.4rem
        }

        `

export function SectionAbout() {



    return (
        <Content >
            <h4 className="subtitle glow">Sobre</h4>
            <p>Tive meu primeiro contato com programação em <span>2021</span>, quando criei minhas primeiras aplicações Back-end, utilizando Java e MySQL</p>
            <p> Por ser uma pessoa que gosta de usar a criatividade, não tive dúvidas no momento em que conheci o Front-end: era com a construção de interfaces utilizando código que eu queria trabalhar.</p>
            <p>É uma área da programação que une as coisas que mais gosto: código e criatividade.</p>
            <p>Em <span>2022</span> comecei essa jornada para me tornar um desenvolvedor Front-end. Atualmente estou dando meus primeiros passos com React e buscando um estágio na área.</p>
        </Content>
    )
}