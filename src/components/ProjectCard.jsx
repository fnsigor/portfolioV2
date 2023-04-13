import styled from 'styled-components';

const Content = styled.div`

        width: 100%;
        background-color: #212121;
        border-radius: 10px;
        min-height: 40rem;

        display: flex;
        flex-direction:column;

        padding: 1.5rem 1rem 1.5rem 1rem;
        

        h5{
            font-size:2rem;
            margin-bottom: 1.5rem;
            text-align: center;
            color: #FFF;
        }

        img{
            width: 100%;
            object-fit: cover;
            margin-bottom: 1rem;
            border-radius: 5px;
        }

        p{
            color: #FFF;
            font-size:1.6rem;
            flex-grow: 1;
            font-family: monospace;
            text-align: center;
        }

        div{
            display: flex;
            justify-content:space-around;
        }

        a{
            font-size:1.6rem;
            font-family: monospace;
            color: #FFF;
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