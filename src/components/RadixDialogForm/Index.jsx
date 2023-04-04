import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import './style.css';
import gmail from '../../assets/gmail.svg'
import { Form } from '../Form/Form';


//TODO fazer estilização
export const RadixDialogForm = () => {

	const [isFormVisible, setIsFormVisible] = useState(false)


	return (
		<Dialog.Root open={isFormVisible}>

			<Dialog.Trigger asChild style={{ height: '100%', width: '100%' }} >
				<img src={gmail} alt="Email (igorfernamdez@gmail.com) Dialog Box" style={{ filter: 'invert()' }}
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

				</Dialog.Content>

			</Dialog.Portal>

		</Dialog.Root>
	)
};