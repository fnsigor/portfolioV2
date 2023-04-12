import styled from 'styled-components';
import { RadixPopUp } from '../../components/RadixPopUp';


const Content = styled.footer`


padding-bottom: 1.5rem;
width: 100%;
color: #FFF;

	h6{
		font-size:1.4rem;
		font-weight: 400;
		line-height: 100%;
		word-spacing: .2rem;
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

	li a, button{
		font-size: 1.4rem;
	}

	ul li:not(ul li:first-child):not(ul li:last-child):after{
		content: ",";
		margin-right: 10px;
	}

`

export function Footer() {




	return (
		<Content>
			<ul>
				<li><h6>Ferramentas usadas para a construção desse portfólio:</h6></li>
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