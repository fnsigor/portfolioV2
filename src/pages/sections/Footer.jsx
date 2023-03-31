import styled from 'styled-components';


export function Footer() {


	const Footer = styled.footer`


	padding-bottom: 1.5rem;
	width: 100%;
	color: white;

		h6{
			font-size:1.4rem;
			font-weight: 400;
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

	)
}