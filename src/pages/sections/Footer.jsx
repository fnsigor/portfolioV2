import styled from 'styled-components';
import { RadixPopUp } from '../../components/RadixPopUp';


const Content = styled.footer`

	color: #FFF;
	padding-bottom: 2rem;
	
	display:flex;
	justify-content:center;
	align-items: center;


	@media(max-width:1555px){
		flex-direction: column;
		margin-bottom: 5px;
		h6{
			text-transform: uppercase;
		}
	}
	

	h6{
		font-size:1.4rem;
		font-weight: 400;
		line-height: 1.6rem;
		word-spacing: .2rem;
		text-align: start;
		margin-right: 10px;
	}

	ul{
		flex-wrap: wrap;
		justify-content: flex-start;
		display: flex;
	}

	ul li:not(ul li:last-child){
		margin-right: 12px;
		position: relative;
	}
	ul li:not(ul li:last-child)::after{
		content: ",";
		bottom: 2px;
		position: absolute;
	}

	li a, button{
		line-height: 1.6rem;
		font-size: 1.4rem;
	}

	

	@media(max-width:850px){

		padding-bottom: 2rem;

		h6{
			text-align: center;
			font-size: 1rem;
			margin-bottom: 5px;
			margin-right: 0;
		}

		ul{
			justify-content: center;
		}

		ul li *{
			font-size: 1rem;
		}
	}
`

export function Footer() {




	return (
		<Content>
			<h6>Ferramentas usadas para a construção desse portfólio:</h6>
			<ul>
				<li><a href="https://react.dev/" target="_blank">React</a></li>
				<li><a href="https://styled-components.com/" target="_blank">Styled Components</a></li>
				<li><a href="https://www.radix-ui.com/" target="_blank">Radix Ui</a></li>
				<li><RadixPopUp
					color={"#74aa9d"}
					itemName="ChatGPT"
					popUpTitle="Usando IAs como ferramenta"
					popUpDescription="Foi a minha primeira vez utilizando IA na programação. Nesse projeto, o ChatGPT me ajudou a trabalhar com váriaveis css utilizando Styled Components. A IA também foi util na hora de fazer buscas na API do GitHub com GraphQL."
				/></li>
				<li><a href="https://reactrouter.com/en/main" target="_blank">React Router</a></li>
				<li><a href="https://graphql.org/" target="_blank">GraphQL</a></li>
				<li><a href="https://www.apollographql.com/docs/" target="_blank">Apollo Client</a></li>
				<li><a href="https://axios-http.com/ptbr/docs/intro" target="_blank">Axios</a></li>
				<li><a href="https://vitejs.dev/" target="_blank">Vite</a></li>
			</ul>
		</Content>

	)
}