import styled, { ThemeProvider } from 'styled-components';
import colors from '../GlobalStyles';
import { Link, useLoaderData } from "react-router-dom";
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from './sections/Footer';



const Content = styled.div`


        header{
            padding-top: 4rem;
        }

        h1{
            text-align: center;
            margin-bottom: 0;
        }

        main{
            padding-block: 8rem;
        }
        
        main ul{ 
            display: grid; 
            grid-gap: 5rem; 
            grid-template-columns: repeat(3, 35rem); 
            justify-content: center; 
            justify-items: center; 

            margin-bottom: 5rem;
        }


        nav *{
            font-size: 1.8rem;
            background-color: ${props => props.theme.newPurple};
            width: 10%;
            padding-block: 1rem;
            border-radius: 5px;
            border: none;
            display:block;
            margin-inline:auto;
            text-align: center;
            transition: .3s;
            
        }

        nav *:hover{
            cursor: pointer;
            box-shadow: 0 0 10px  ${props => props.theme.newPurple};
        }

`


export function AllProjects() {
    const { pinnedItems } = useLoaderData()

    return (

        <ThemeProvider theme={colors}>
            <Content>
                <header>
                    <h1 className="subtitle glow">Todos os projetos</h1>
                </header>

                <main>
                    <ul>
                        {
                            pinnedItems.map(project => (
                                <li key={project.name}>
                                    <ProjectCard project={project} key={project.nameWithOwner} />
                                </li>
                            ))
                        }
                    </ul>

                    <nav>

                        <Link to="/">Voltar</Link>

                    </nav>
                </main>
                <Footer />
            </Content>

        </ThemeProvider>

    )
}