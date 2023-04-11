import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import '../RadixDialogForm/style.css';
import axios from 'axios';
import { EmailContext } from '../../EmailContext';



const Formulario = styled.form`
      	background-color: #F2F2F2;

		* {
			display: block;
		}

		label {
			font-size: 2rem;
			margin-bottom: .5rem;
			color: ${props => props.theme.darkPurple};
            font-family: monospace;
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
			line-height: 1.6rem;
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





export function Form({ setIsFormVisible }) {

    const [email, setEmail] = useState('')
    const [guestName, setGuestName] = useState('')
    const [message, setMessage] = useState('')
    const [enviadoComSucesso, setEnviadoComSucesso] = useContext(EmailContext);

    async function sendEmail(e) {
        e.preventDefault();
        setIsFormVisible(false)

        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const { data } = await axios.post('https://formsubmit.co/ajax/igorfernamdez@gmail.com', {
            _subject: 'Contato do portfólio!',
            Nome: guestName,
            Email: email,
            Mensagem: message
        })

        console.log(data)
        setEnviadoComSucesso(data.success)
    }


    return (
        <Formulario onSubmit={sendEmail}>

            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    value={guestName}
                    onChange={(event) => setGuestName(event.target.value)}
                    placeholder='Seu nome'
                    type="text"
                    id="name"
                    key="name"
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder='Seu melhor email'
                    type="text"
                    name="email"
                    id="name"
                    key="email"
                />
            </div>

            <div>
                <label htmlFor="message">Mensagem:</label>
                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    name="message"
                    id="message"
                    cols="30"
                    rows="6">
                </textarea>
            </div>
            <button className="Button SendEmailButton">Enviar</button>
        </Formulario>
    )
}