import styled, { ThemeProvider } from 'styled-components';
import colors from '../globalStyle';
import { DesktopMenu } from '../components/DesktopMenu';
import { ReactPopUp } from '../components/ReactPopUp';
import { Carousel } from '../components/Carousel';
import { useLoaderData } from "react-router-dom";




export function Index() {

	const { pinnedItems } = useLoaderData()


	const PageContent = styled.div`

		position: relative;

			.glow{
				text-shadow:${props => props.theme.neonTextShadow};
			}

			.subtitle{
				font-family: "Cyberfunk", monospace;
				color: ${props => props.theme.titleColor};
				font-size: 3.5rem;
				text-transform: uppercase;
				margin-bottom: 2rem;
			}

			header, section{
				margin-bottom: 15rem ;
			}
`




	const Header = styled.header`

		position: relative;
		min-height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		h1{
		font-size: 12.8rem;
		color: ${props => props.theme.titleColor};
		font-family: "Cyberway", monospace;
		text-transform: none;
		margin-bottom: 2rem;
		}

		span{
			font-family: "Cyberfunk", monospace;
			color: ${props => props.theme.titleColor};
			font-size: 4.8rem;
		}

	`


	const SectionAbout = styled.section`
		
	display: flex;
	gap: 15rem;

	> div{
		width: 50%;

	}

	p{
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.stack-section{
		display: flex;
		flex-direction: column;
	}

	.stack-list{
		display: flex;

		gap: 3rem;

		flex: 1;
	}

	.stack-list span{
		font-size: 3rem;
	}

	.react-libs{
		height: 300px;
		width: 300px;
	}

	`

	const SectionProjects = styled.section`

	h4{
		text-align: center;
	}
	
	`

	return (
		<ThemeProvider theme={colors}>
			<PageContent>


				<Header>
					<h1 className='glow'>FNSIGOR</h1>
					<span>Desenvolvedor Front-end</span>
					<DesktopMenu />
				</Header>

				<main>
					<SectionAbout id='about'>
						<div >
							<h4 className="subtitle glow">Sobre</h4>
							<p>Tive meu primeiro contato com programação em 2021, quando criei minhas primeiras aplicações Back-end, utilizando Java e MySQL</p>
							<p> Por ser uma pessoa que gosta de usar a criatividade, não tive dúvidas no momento em que conheci o Front-end: era com a construção de interfaces utilizando código que eu queria trabalhar.</p>
							<p>É uma área da programação que une as coisas que mais gosto: código e criatividade.</p>
							<p>Em 2022 comecei essa jornada para me tornar um desenvolvedor Front-end. Atualmente estou dando meus primeiros passos com React e buscando um estágio na área.</p>
						</div>


						<div className="stack-section">
							<h4 className="subtitle glow">Stack</h4>
							<ul className="stack-list">
								<li><span>Javascript</span></li>
								<li><span>HTML</span></li>
								<li><span>CSS</span></li>
								<li><ReactPopUp /></li>
								<li><span>GIT</span></li>
							</ul>
						</div>
					</SectionAbout>

					<SectionProjects>
						<h4 className="subtitle glow">Projetos recentes</h4>
						<Carousel pinnedItems={pinnedItems} />
					</SectionProjects>
				</main>


			</PageContent>
		</ThemeProvider>

	)
}

