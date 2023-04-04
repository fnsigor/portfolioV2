import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';
import './styles.css';

export const RadixToast = ({ enviadoComSucesso }) => {

    return (
        <Toast.Provider >
            <Toast.Root className={`ToastRoot ${enviadoComSucesso ? 'Enviado' : 'NaoEnviado'}`} duration={5000}>
                <Toast.Title className="ToastTitle">{enviadoComSucesso ? "Email enviado com sucesso!" : "Não foi possível enviar o email"}</Toast.Title>
                <Toast.Description asChild>
                    <p className="ToastDescription">
                        {enviadoComSucesso ? "Em breve entrarei em contato" : "Verifique se preencheu os campos corretamente"}
                    </p>
                </Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="ToastViewport" />
        </Toast.Provider>
    );
};

