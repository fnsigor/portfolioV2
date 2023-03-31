import styled from 'styled-components';
import { Carousel } from '../../components/Carousel'



export function SectionProjects({ pinnedItems }) {


    const SectionProjects = styled.section``

    return (
        <SectionProjects>
            <h4 className="subtitle glow">Projetos recentes</h4>
            <Carousel pinnedItems={pinnedItems} />
        </SectionProjects>
    )
}