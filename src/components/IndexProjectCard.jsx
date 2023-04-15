import styled from 'styled-components';


export const Bt = styled.button`

    width: 100%;
    max-width: 30rem;
    min-width: 25rem;
    
    border-radius: 4px;
    padding: 0 2rem;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 500;
    text-align: center;
    height: 3.5rem;
    background-color: ${props => props.theme.newPurple};

    box-shadow: 0 0 5px 1px ${props => props.theme.lightPurple} ;
    border: none;
    transition: .3s;
    font-family: 'Adero', monospace, sans-serif;

    @media(max-width:850px){
        width: 100%;
    }
`

const Content = styled.div`

     
        height: 100%;
        position: relative;
        border: 2px solid ${props => props.theme.newPurple};
        border-radius: 5px;
  


        .bg{
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

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
                word-spacing:3px;
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
                flex-wrap:wrap;
                gap: 3rem;

                
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
                color: #fff;
            }

        }

        @media(max-width:850px){
            
            .content{

                h5{
                    text-align: center;
                    font-size: 1.875rem;
                }

                p{
                    font-size: 1.6rem;
                }

                a{
                    font-size:1.6rem;
                }


                div.links{
                    flex-direction:column;
                    align-items: center;         
                    padding-inline: 2rem;
                }
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

function ProjectName({ name }) {

    const newName = name.replaceAll('_', ' ')

    return (
        <h5>{newName}</h5>
    )
}

export function IndexProjectCard({ project }) {


    return (
        <Content >
            <div className="bg" style={{ backgroundImage: `url(${project.openGraphImageUrl})` }}>
            </div>
            <div className="content">
                <ProjectName name={project.name} />
                <p>{project.description}</p>
                <div className="links">
                    <Bt>
                        <ProjectLinks project={project} />
                    </Bt>
                    <Bt>
                        <a href={project.url} target="_blank">Repositório</a>
                    </Bt>
                </div>
            </div>

        </Content>


    )
}