import styled, { ThemeProvider } from 'styled-components';
import colors, { GlobalStyle } from '../globalStyle';
import { DesktopMenu } from '../components/DesktopMenu';


export function Home() {

	const Header = styled.header`

    min-height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.glow{
		text-shadow:${props => props.theme.neonTextShadow};
	}

	.subtitle{
		font-family: "Cyberfunk", monospace;
		color: ${props => props.theme.titleColor};
		font-size: 3.5rem;
		text-transform: uppercase;
	}


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
	const Main = styled.main`
	background-color: red;
	height: 100vh;
	`
	const Footer = styled.footer`
	background-color: blue;
	height: 100vh;
	`


	const App = styled.div`
			position: relative;
`



	return (

		<ThemeProvider theme={colors}>
			<App>

				<DesktopMenu />

				<Header>
					<h1 className='glow'>FNSIGOR</h1>
					<span>Desenvolvedor Front-end</span>
				</Header>
				<Main >
					MAIN CONTENT
				</Main>
				<Footer>
					FOOTER
				</Footer>
			</App>

		</ThemeProvider>

	)
}

