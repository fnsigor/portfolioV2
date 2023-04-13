import styled from 'styled-components';

const Content = styled.div`

     
        height: 100%;
        position: relative;
  


        .bg{
            background-repeat: no-repeat;
            background-size: cover;

            width: 100%;
            height: 100%;

            position: absolute;
            content: "";

            filter: blur(4px) brightness(40%);
        }

        .content{
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 2rem;
         

            h5{
                font-size:2.5rem;
                margin-bottom: 4rem;
                text-transform: uppercase;
            }

        
            p{
                font-size:2.2rem;
                flex-grow: 1;
                font-family: monospace;
                text-transform: uppercase;
            }

            div.links{
                display: flex;
                justify-content:space-between;

                
                position: absolute;
                left: 0;
                bottom: 2rem;
                
                width: 100%;
                padding-inline: 2rem;
            }


            a{
                font-size:2rem;
                font-family: monospace;
                text-transform: uppercase;
                transition: .3s;
            }

            a:hover{
                text-shadow: ${props => props.theme.neonTextShadow};
            }

        }


`

function ProjectLinks({ project }) {

    if (project.name === "Card_Details") {
        return <a href="https://card-details-ruddy.vercel.app/" target="_blank">Acessar Projeto</a>
    }

    else {
        return <a href={project.homepageUrl ?? `https://fnsigor.github.io/${project.name}`} target="_blank">Acessar Projeto</a>
    }
}

export function IndexProjectCard({ project }) {


    return (
        <Content >
            <div className="bg" style={{ backgroundImage: `url(${project.openGraphImageUrl})` }}>
            </div>
            <div className="content">
                <h5>{project.name}</h5>
                <p>{project.description}</p>
                <div className="links">
                    <ProjectLinks project={project} />
                    <a href={project.url} target="_blank">Repositório</a>
                </div>
            </div>

        </Content>


    )
}