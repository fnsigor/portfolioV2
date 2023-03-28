import styled, { ThemeProvider } from 'styled-components';
import colors from '../globalStyle';
import { DesktopMenu } from '../components/DesktopMenu';
import { RadixPopUp } from '../components/RadixPopUp';
import { Carousel } from '../components/Carousel';
import { useLoaderData } from "react-router-dom";
import { Form } from '../components/Form';




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

	const SectionContact = styled.section`
	
		h4{
			text-align: center;
		}
	
		.content{
			display: flex;
		}

		.content > *{
			flex: 1;
		}

		.formContainer, .contactsContainer{
			display: flex;
			justify-content:center;
			align-items:center;
		}

		.contactsUl{
			display: flex;
			flex-direction:column;
			gap: 4rem;
		}
		
		.contactsUl li{
			position: relative;
		}

		.contactsUl li::after{
			content: "";
			position: absolute;
			height: 2px;
			width: 100%;
			box-shadow: 0px 2px 2px ${props => props.theme.lightPurple};
			background-color: transparent;
		}


		.contactsUl span{
			font-size: 1.8rem;
			margin-bottom: .5rem;
			display: block;
		}

		.contactsUl a {
			font-size: 2.4rem;
			color:  ${props => props.theme.paragraphColor};
			transition: .3s;
			font-weight: 200;
			display: block;
			
		}
	`

	const Footer = styled.footer`

		h6{
			font-size:1.6rem
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
								<li>
									<RadixPopUp
										color="blue"
										itemName="React"
										popUpTitle="Ferramentas"
										popUpDescription="Styled components, react router" />
								</li>
								<li><span>GIT</span></li>
							</ul>
						</div>
					</SectionAbout>

					<SectionProjects>
						<h4 className="subtitle glow">Projetos recentes</h4>
						<Carousel pinnedItems={pinnedItems} />
					</SectionProjects>

					<SectionContact>
						<h4 className="subtitle glow">Contato e Redes Sociais</h4>
						<div className="content">
							<div className="formContainer">
								<Form />
							</div>
							<div className="contactsContainer">
								<ul className="contactsUl">
									<li>
										<span>Email: </span>
										<a href="">igorfernamdez@gmail.com</a>
									</li>
									<li>

										<span>Whatsapp:</span>
										<a href="">48984489254</a>
									</li>
									<li>
										<span>Linkedin: </span>
										<a href="">igorfernamdez@gmail.com</a>
									</li>
									<li>
										<span>Github: </span>
										<a href="">fnsigor</a>
									</li>
								</ul>
							</div>
						</div>
					</SectionContact>
				</main>


				<Footer>
					<h6>Essa aplicação foi construida com as seguintes tecnologias:</h6>
					<ul>
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

