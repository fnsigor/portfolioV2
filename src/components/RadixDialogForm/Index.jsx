import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import './style.css';
import gmail from '../../assets/gmail.svg'


//TODO fazer estilização
export const RadixDialogForm = () => {


	const Form = styled.form`


   
      	background-color: #F2F2F2;



		* {
			display: block;
		}

		label {
			font-size: 1.8rem;
			margin-bottom: .5rem;
			color: ${props => props.theme.darkPurple};
		}

		input,
		label,
		textarea {
			width: 100%;
		}

		input{
			margin-bottom: 1.8rem;
		}


		input,
		textarea {
			background-color: transparent;
			color: ${props => props.theme.darkPurple};

			transition: .3s;
			
			font-size: 1.6rem;
			line-height: 1.6rem
			font-family: monospace;

			padding: .8rem;
			border: 1px solid  ${props => props.theme.mediumPurple};
			border-radius: 5px;
		}

		textarea{
			resize:none;
			margin-bottom:3rem;
		}


		input:focus,
		textarea:focus {
			outline: none;
			color:  ${props => props.theme.darkPurple};
			background-color: #962abd67;
		}
`

	return (
		<Dialog.Root>

			<Dialog.Trigger asChild style={{ height: '100%', width: '100%' }} >
				<img src={gmail} alt="Email (igorfernamdez@gmail.com) Dialog Box" style={{ filter: 'invert()' }} />
			</Dialog.Trigger>

			<Dialog.Portal>

				<Dialog.Overlay className="DialogOverlay" />

				<Dialog.Content className="DialogContent">
					<Dialog.Title className="DialogTitle">Entre em contato!</Dialog.Title>

					<Dialog.Description className="DialogDescription">
						Envie um email para <strong>igorfernamdez@gmail.com</strong>
					</Dialog.Description>

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
							<textarea name="" id="" cols="30" rows="6"></textarea>
						</div>

						<Dialog.Close asChild>
							<button className="Button SendEmailButton">Enviar</button>
						</Dialog.Close>
					</Form>

					{/* <Dialog.Close asChild>
						<button className="Button CloseDialogButton" aria-label="Close">
							X
						</button>
					</Dialog.Close> */}
				</Dialog.Content>

			</Dialog.Portal>

		</Dialog.Root>
	)
};