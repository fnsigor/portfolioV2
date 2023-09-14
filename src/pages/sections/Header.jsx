import styled from 'styled-components';
import { MenuButton } from '../../components/MenuButton/MenuButton';

const Content = styled.header`

	position: relative;
	min-height: 100vh;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	margin-bottom: 15rem;

	h1{
		font-size: 12.8rem;
		color: ${props => props.theme.titleColor};
		font-family: "Cyberway", monospace;
		text-transform: none;
		margin-bottom: 2rem;
	}
	
	span{
		word-break: keep-all;
		font-family: "Cyberfunk", monospace;
		color: ${props => props.theme.titleColor};
		font-size: 4.8rem;
	}

	@media(max-width:850px){

		margin-bottom: 10rem;

		h1{
			font-size: 6rem;
			margin-bottom: 2.5rem;
		}

		span{
			font-size: 3.75rem;
			text-align: center;
		}


	}



`



export function Header() {



	return (
		<Content>
			<h1 className='glow'>FNSIGOR</h1>
			{(window.screen.width >= 365 && window.screen.width <= 419)
				? (<span>Desenvolvedor <br /> WEB</span>) :
				(<span>Desenvolvedor WEB</span>)}
			<MenuButton />
		</Content>
	)
}