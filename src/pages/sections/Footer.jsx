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
	}
	

	h6{
		font-size:1.4rem;
		font-weight: 400;
		line-height: 1.6rem;
		word-spacing: .2rem;
		text-align: start;
		margin-right: 10px;
		text-transform: uppercase;
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
					popUpTitle="Como assim ChatGPT?"
					popUpDescription="Essa IA foi usada ao longo do desenvolvimento, para tirar algumas dúvidas que surgiam"
				/></li>
				<li><a href="https://reactrouter.com/en/main" target="_blank">React Router</a></li>
				<li><a href="https://graphql.org/" target="_blank">GraphQL</a></li>
				<li><a href="https://www.apollographql.com/docs/" target="_blank">Apollo Client</a></li>
			</ul>
		</Content>

	)
}