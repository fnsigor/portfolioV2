import styled from 'styled-components';
import { Carousel } from './../../components/Carousel';
import { ProjectCard } from '../../components/ProjectCard';


const Wrapper = styled.div`
justify-content: center;
display: flex;
gap: 4rem;
`


export function SectionProjects({ pinnedItems }) {


    return (
        <section>
            <h4 className="subtitle glow">Projetos recentes</h4>
            <Wrapper>
                {
                    pinnedItems.map((item, index) => (
                        <ProjectCard project={item} key={item.name} />
                    ))
                }
                <div className="verMais"></div>
            </Wrapper>
        </section>
    )
}