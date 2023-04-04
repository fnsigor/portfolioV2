import styled from 'styled-components';
import { DesktopMenu } from '../../components/DesktopMenu';

const Content = styled.header`

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



export function Header() {



	return (
		<Content>
			<h1 className='glow'>FNSIGOR</h1>
			<span>Desenvolvedor Front-end</span>
			<DesktopMenu />
		</Content>
	)
}