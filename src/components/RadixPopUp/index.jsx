import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import './styles.css';


//FIXME desativar scrollbar ao clicar no elemento e aumentar z-index, pois está conflitando com o carrosel
export const RadixPopUp = ({ color, itemName, popUpTitle, popUpDescription }) => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <button className="itemName button">{itemName}</button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            {/* <AlertDialog.Overlay className="AlertDialogOverlay" /> */}
            <AlertDialog.Content className="AlertDialogContent">
                <AlertDialog.Title className="AlertDialogTitle">{popUpTitle}</AlertDialog.Title>
                <AlertDialog.Description className="AlertDialogDescription">
                    {popUpDescription}
                </AlertDialog.Description>
                <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                    <AlertDialog.Cancel asChild>
                        <button className="closeButton button">Fechar</button>
                    </AlertDialog.Cancel>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
);
