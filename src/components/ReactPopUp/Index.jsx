import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import './styles.css';

export const ReactPopUp = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <button className="itemName button">React</button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            {/* <AlertDialog.Overlay className="AlertDialogOverlay" /> */}
            <AlertDialog.Content className="AlertDialogContent">
                <AlertDialog.Title className="AlertDialogTitle">Ferramentas</AlertDialog.Title>
                <AlertDialog.Description className="AlertDialogDescription">
                    Styled components, react router
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
