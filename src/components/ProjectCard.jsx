import styled, { ThemeProvider } from 'styled-components';

const Content = styled.div`

        width: 40rem;
        background-color: #272727;
        border-radius: 5px;
        min-height: 40rem;

        display: flex;
        flex-direction:column;

        padding: 1rem 1rem 1.5rem 1rem;
        

        h5{
            font-size:2rem;
            margin-bottom: 1rem;
            text-align: center;
        }

        img{
            width: 100%;
            object-fit: cover;
            margin-bottom: 1rem;
            border-radius: 5px;
        }

        p{
           
            font-size:1.6rem;
            flex-grow: 1;
            font-family: monospace;
        }

        div{
            display: flex;
            justify-content:space-around;
        }

        a{
            font-size:1.6rem;
            font-family: monospace;
        }


`

function ProjectLinks({ project }) {

    if (project.name === "Card_Details") {
        return <a href="https://card-details-ruddy.vercel.app/" target="_blank">Projeto</a>
    }

    else {
        return <a href={project.homepageUrl ?? `https://fnsigor.github.io/${project.name}`} target="_blank">Projeto</a>
    }
}

export function ProjectCard({ project }) {


    return (
        <Content>
            <h5>{project.name}</h5>
            <img src={project.openGraphImageUrl} alt="Preview do projeto" />
            <p>{project.description}</p>
            <div className="links">
                <ProjectLinks project={project} />
                <a href={project.url} target="_blank">Repositório</a>
            </div>

        </Content>


    )
}