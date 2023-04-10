import styled, { ThemeProvider } from 'styled-components';
import colors from '../GlobalStyles';
import { useLoaderData } from "react-router-dom";
import { useEffect } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from './sections/Footer';



const Content = styled.main`
    main{
        display: flex;
        flex-wrap: wrap;
        gap: 5rem;
        justify-content: center;
        margin-bottom: 15rem;
    }
`


export function AllProjects() {
    const { pinnedItems } = useLoaderData()

    useEffect(() => {
        console.log(pinnedItems)
    }, [])


    return (

        <ThemeProvider theme={colors}>
            <Content>
                <header>
                    <h1>Projetos</h1>
                </header>

                <main>
                    {
                        pinnedItems.map(project => (
                            <ProjectCard project={project} key={project.nameWithOwner} />
                        ))
                    }
                </main>
                <Footer />
            </Content>

        </ThemeProvider>

    )
}