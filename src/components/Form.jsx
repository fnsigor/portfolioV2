import styled, { ThemeProvider } from 'styled-components';
import colors from '../globalStyle';

export function Form() {

    const Form = styled.form`
   
        color: ${props => props.theme.paragraphColor};

        width: 70%;
        max-width: 55rem;

        display: flex;
        flex-direction: column;
        gap: 2.3rem;

		
		* {
			display: block;
		}

		label {
			font-size: 2rem;
			margin-bottom: .5rem;
		}

		input,
		label,
		textarea {
			width: 100%;
		}

		textarea {
			resize: none;
		}


		button {
			align-self: center;

			font-size: 1.8rem;
			padding: .5rem 2rem;

			border: none;

			transition: .3s;

			font-family: 'Adero', monospace;
			color: ${props => props.theme.darkPurple};
			width: 100%;
			border-radius: 5px;
		}

		button:hover {
			box-shadow: 0 0 10px ${props => props.theme.lightPurple};
			cursor: pointer;

			background-color: ${props => props.theme.mediumPurple};
			color: #fff;

		}

		input,
		textarea {
			padding: .8rem;
			background-color: ${props => props.theme.darkPurple};
			color: #fff;
			transition: .3s;
			font-size: 1.8rem;

			font-family: monospace;

			border: 1px solid ${props => props.theme.lightPurple};
			box-shadow: 0 0 10px ${props => props.theme.lightPurple};
			border-radius: 5px;
		}


		input:focus,
		textarea:focus {
			outline: none;
			background-color: #270235;
		}
    `

    return (
        <Form>
            <div>
                <label htmlFor="">Nome</label>
                <input type="text" name="" id="" placeholder='Seu nome' />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" placeholder='Seu melhor email' />
            </div>

            <div>
                <label htmlFor="">Mensagem:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <button>Enviar email</button>
        </Form>
    )
}