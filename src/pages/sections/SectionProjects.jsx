import styled from 'styled-components';
import { Carousel } from './../../components/Carousel';




export function SectionProjects({ pinnedItems }) {


    return (
        <section>
            <h4 className="subtitle glow">Projetos recentes</h4>
            <Carousel pinnedItems={pinnedItems} />
        </section>
    )
}