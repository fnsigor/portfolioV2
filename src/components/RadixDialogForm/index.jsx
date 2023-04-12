import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import './style.css';
import email from '../../assets/email.svg'
import { Form } from '../Form/Form';


const Img = styled.img`

filter: drop-shadow(0 0 15px #ff0000);

	:hover{
		cursor: pointer;
	}
`



export const RadixDialogForm = () => {

	const [isFormVisible, setIsFormVisible] = useState(false)


	return (
		<Dialog.Root open={isFormVisible}>

			<Dialog.Trigger asChild style={{ height: '100%', width: '100%' }} >
				<Img src={email} alt="Email (igorfernamdez@gmail.com) Dialog Box" title="Email"
					onClick={() => setIsFormVisible(true)} />
			</Dialog.Trigger>

			<Dialog.Portal>

				<Dialog.Overlay className="DialogOverlay" />

				<Dialog.Content className="DialogContent">
					<Dialog.Title className="DialogTitle">Entre em contato!</Dialog.Title>

					<Dialog.Description className="DialogDescription">
						Envie um email para <strong>igorfernamdez@gmail.com</strong>
					</Dialog.Description>

					<Form setIsFormVisible={setIsFormVisible} />

					<Dialog.Close asChild onClick={() => setIsFormVisible(false)}>
						<button className="Button Close">Fechar</button>
					</Dialog.Close>
				</Dialog.Content>

			</Dialog.Portal>

		</Dialog.Root>
	)
};
