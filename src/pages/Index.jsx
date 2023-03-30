import styled, { ThemeProvider } from 'styled-components';
import colors from '../globalStyle';
import { DesktopMenu } from '../components/DesktopMenu';
import { RadixPopUp } from '../components/RadixPopUp';
import { Carousel } from '../components/Carousel';
import { useLoaderData } from "react-router-dom";
import { Form } from '../components/Form';

import { BsWhatsapp, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'
import { SiFrontendmentor } from 'react-icons/si'


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

			section, header{
				margin-bottom: 15rem ;
			}


			h4{
				text-align: center;
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

		p{
			margin-inline: auto;
			font-size: 2rem;
			margin-bottom: 1rem;
			width: 50%;
		}


	`

	const SectionStack = styled.section`

		.stack-list{
			display: flex;
			gap: 3rem;
			justify-content: center;
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
	`

	const SectionContact = styled.section`
	

		.contactsUl{
			display: flex;
			gap: 8rem;
			justify-content: center;
		}
		
		.contactsUl li{
			height: 6rem;
			width: auto;
		}

		svg{
			height:100%;
			width: 100%;
		}
	


		
		
		
	`

	const Footer = styled.footer`


	padding-bottom: 1.5rem;
	width: 100%;

		h6{
			font-size:1.4rem;
			font-weight: 400;
			/* background-color: red; */
			line-height: 100%;
		}

		ul{
			display: flex;
			align-items: center;
			width: 100%;
			justify-content: center;
		}

		ul li:first-child{
			margin-right: 5px;
		}

		li a{
			font-size: 1.4rem;
		}

		ul li:not(ul li:first-child):not(ul li:last-child):after{
			content: ",";
			margin-right: 10px;
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
					<SectionAbout >
						<h4 className="subtitle glow">Sobre</h4>
						<p>Tive meu primeiro contato com programação em 2021, quando criei minhas primeiras aplicações Back-end, utilizando Java e MySQL</p>
						<p> Por ser uma pessoa que gosta de usar a criatividade, não tive dúvidas no momento em que conheci o Front-end: era com a construção de interfaces utilizando código que eu queria trabalhar.</p>
						<p>É uma área da programação que une as coisas que mais gosto: código e criatividade.</p>
						<p>Em 2022 comecei essa jornada para me tornar um desenvolvedor Front-end. Atualmente estou dando meus primeiros passos com React e buscando um estágio na área.</p>
					</SectionAbout>

					<SectionStack className="stack-section">
						<h4 className="subtitle glow">Stack</h4>
						<ul className="stack-list">
							<li><span>Javascript</span></li>
							<li><span>HTML</span></li>
							<li><span>CSS</span></li>
							<li>
								<RadixPopUp
									color="blue"
									itemName="React"
									popUpTitle="Ferramentas"
									popUpDescription="Styled components, react router" />
							</li>
							<li><span>GIT</span></li>
						</ul>
					</SectionStack>


					<SectionProjects>
						<h4 className="subtitle glow">Projetos recentes</h4>
						<Carousel pinnedItems={pinnedItems} />
					</SectionProjects>

					<SectionContact>
						<h4 className="subtitle glow">Contato e Redes Sociais</h4>
						<address className="content">
							<ul className="contactsUl">
								<li>
									<a href=""><MdEmail /></a>
								</li>
								<li>
									<a href=""><BsWhatsapp /></a>
								</li>
								<li>
									<a href=""><BsLinkedin /></a>
								</li>
								<li>
									<a href=""><BsGithub /></a>
								</li>
								<li>
									<a href=""><BsTwitter /></a>
								</li>
								<li>
									<a href=""><SiFrontendmentor /></a>
								</li>
							</ul>

						</address>
					</SectionContact>
				</main>


				<Footer>
					<ul>
						<li><h6>Ferramentas usadas para construção desse portfólio:</h6></li>
						<li><a href="" target="_blank">React</a></li>
						<li><a href="" target="_blank">Styled Components</a></li>
						<li><a href="" target="_blank">Radix Ui</a></li>
						<li><a href="" target="_blank">ChatGPT</a></li>
						<li><a href="" target="_blank">React Router</a></li>
						<li><a href="" target="_blank">GraphQL</a></li>
						<li><a href="" target="_blank">Apollo Client</a></li>
					</ul>
				</Footer>


			</PageContent>
		</ThemeProvider>

	)
}

