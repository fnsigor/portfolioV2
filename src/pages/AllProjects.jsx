import styled, { ThemeProvider } from 'styled-components';
import colors from '../GlobalStyles';
import { useLoaderData, useLocation } from "react-router-dom";
import { Footer } from './sections/Footer';
import { IndexProjectCard } from '../components/IndexProjectCard';
import { MenuButton } from '../components/MenuButton/MenuButton';
import { useScrollToTop } from '../useScrollToTop';


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
            grid-template-columns: repeat(auto-fit, minmax(100px, 350px));
            grid-auto-rows: 480px;

            justify-content: center;
            gap: 50px;

            margin-bottom: 5rem;
        }

        main ul li{
            width: 100%;
            height: 100%;
        }
/* 

        .IconButton{
            top: 3.4rem;
            right: 8%;
        } */


            /* @media(max-width:850px) {

            
             .IconButton {
                    position: fixed;
                    top:initial;
                    z-index: 3;
                    left:initial;
                    bottom: 15%;
                    right: 0%;
                }
            } */
        

`


export function AllProjects() {

    const { pinnedItems } = useLoaderData()

    const {pathname} = useLocation()

	const verifyPath = useScrollToTop()

	verifyPath(pathname)


    return (

        <ThemeProvider theme={colors}>
            <Content>
                <header>
                    <h1 className="subtitle glow">Todos os projetos</h1>
                </header>
                <MenuButton />

                <main>
                    <ul>
                        {
                            pinnedItems.map(project => (
                                <li key={project.name}>
                                    <IndexProjectCard project={project} key={project.nameWithOwner} />
                                </li>
                            ))
                        }
                    </ul>

                </main>
                <Footer />
            </Content>

        </ThemeProvider>

    )
}