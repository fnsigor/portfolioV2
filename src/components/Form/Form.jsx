import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import '../RadixDialogForm/style.css';
import axios from 'axios';
import { EmailContext } from '../../EmailContext';
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";


const Formulario = styled.form`
      	background-color: #F2F2F2;

		* {
			display: block;
		}

		label {
			font-size: 1.8rem;
			margin-bottom: .5rem;
			color: ${props => props.theme.darkPurple};
            font-family: 'Adero', monospace, sans-serif;
		}

		input,
		label,
		textarea {
			width: 100%;
		}

		div{
			margin-bottom: 2.4rem;
		}


		input,
		textarea {
			background-color: transparent;
			color: ${props => props.theme.darkPurple};

			transition: .3s;
			
			font-size: 2rem;
			line-height: 2.2rem;
			font-family: monospace;
            word-spacing: -5px;

			padding: .8rem;
			border: 1px solid  ${props => props.theme.mediumPurple};
			border-radius: 5px;
		}

		textarea{
			resize:none;
		}


		input:focus,
		textarea:focus {
			outline: none;
			color:  ${props => props.theme.darkPurple};
			background-color: #962abd67;
		}

        .errorMessage {
            color: #bf1650;
            margin-top: 5px;
            font-size: 1.4rem;
            font-family: monospace, sans-serif;
            font-weight: bold
        }

        .errorMessage::before {
            display: inline;
            content: "⚠ ";
        }



        @media(max-width:850px){

            label {
			    font-size: 1.6rem;
		    }

            input,
            textarea{
                font-size: 1.6rem;
                line-height: 1.8rem;
            }

        }
`





export function Form({ setIsFormVisible }) {

    const [email, setEmail] = useState('')
    const [guestName, setGuestName] = useState('')
    const [message, setMessage] = useState('')
    const [enviadoComSucesso, setEnviadoComSucesso] = useContext(EmailContext);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        criteriaMode: "all"
    });

    async function sendEmail() {

        setIsFormVisible(false)

        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const { data } = await axios.post('https://formsubmit.co/ajax/igorfernamdez@gmail.com', {
            _subject: 'Contato do portfólio!',
            Nome: guestName,
            Email: email,
            Mensagem: message
        })

        setEnviadoComSucesso(data.success)
    }


    return (
        <Formulario onSubmit={handleSubmit(() => { sendEmail() })}>

            <div>
                <label htmlFor="name">Nome:</label>

                <input
                    value={guestName}
                    placeholder='Seu nome'
                    type="text"
                    id="name"
                    key="name"
                    {...register("name", {
                        onChange: e => setGuestName(e.target.value),
                        required: "Esse campo é obrigatório ",
                        pattern: {
                            value: /^[A-Za-z\s]+$/i,
                            message: "Somente letras nesse campo"
                        },
                        minLength: {
                            value: 2,
                            message: "Esse campo deve conter no mínimo 2 caracteres"
                        },
                    })} />

                <ErrorMessage

                    errors={errors}
                    name="name"
                    render={({ messages }) => {
                        return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p className='errorMessage' key={type}>{message}</p>
                            ))
                            : null;
                    }}
                />

            </div>

            <div>
                <label htmlFor="email">E-mail:</label>
                <input
                    value={email}
                    placeholder='Seu melhor E-mail'
                    type="text"
                    name="email"
                    id="email"
                    key="email"
                    {...register("email", {
                        onChange: e => setEmail(e.target.value),
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: "Insira um E-mail válido"
                        },
                    })} />

                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p className='errorMessage' key={type}>{message}</p>
                            ))
                            : null;
                    }}
                />
            </div>

            <div>
                <label htmlFor="message">Mensagem:</label>
                <textarea
                    value={message}
                    name="message"
                    id="message"
                    cols="30"
                    {...register("message", {
                        onChange: e => setMessage(e.target.value),
                        required: "Esse campo é obrigatório ",
                        minLength: {
                            value: 3,
                            message: "Esse campo deve conter no mínimo 3 caracteres"
                        },
                    })}>
                </textarea>
                <ErrorMessage
                    errors={errors}
                    name="message"
                    render={({ messages }) => {
                        return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p className='errorMessage' key={type}>{message}</p>
                            ))
                            : null;
                    }}
                />
            </div>


            <button className="Button SendEmailButton">Enviar</button>
        </Formulario>
    )
}
