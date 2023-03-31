import styled from 'styled-components';



export function SectionAbout() {

    const SectionAbout = styled.section`	

        p{
            margin-inline: auto;
            font-size: 2rem;
            margin-bottom: 1rem;
            width: 50%;
        }

        `

    return (
        <SectionAbout >
            <h4 className="subtitle glow">Sobre</h4>
            <p>Tive meu primeiro contato com programação em 2021, quando criei minhas primeiras aplicações Back-end, utilizando Java e MySQL</p>
            <p> Por ser uma pessoa que gosta de usar a criatividade, não tive dúvidas no momento em que conheci o Front-end: era com a construção de interfaces utilizando código que eu queria trabalhar.</p>
            <p>É uma área da programação que une as coisas que mais gosto: código e criatividade.</p>
            <p>Em 2022 comecei essa jornada para me tornar um desenvolvedor Front-end. Atualmente estou dando meus primeiros passos com React e buscando um estágio na área.</p>
        </SectionAbout>
    )
}