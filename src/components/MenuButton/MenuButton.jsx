import { ThemeProvider } from 'styled-components';
import colors from '../../GlobalStyles';
import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { HashLink as Link } from 'react-router-hash-link';

import './style.css'
import { useEffect } from 'react';
import { useState } from 'react';


export function MenuButton() {

    const [isProjectsPage, setIsProjectsPage] = useState('')

    useEffect(() => {
        setIsProjectsPage(window.location.href.includes('/projects'))
    }, [])

    return (

        <ThemeProvider theme={colors}>
            <Popover.Root>
                <Popover.Trigger asChild>
                    <button className="IconButton" aria-label="Update dimensions" title='Menu' >
                        <MixerHorizontalIcon />
                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content
                        className="PopoverContent"
                        sideOffset={5}
                        side="left"
                    >
                        <ul>
                            <li><Link to="/#sobre">SOBRE</Link></li>
                            <li><Link to="/#stack">STACK</Link></li>
                            <li><Link to="/#projetos">PROJETOS RECENTES</Link></li>
                            <li><Link to="/#contatos">CONTATO E REDES SOCIAIS</Link></li>
                            <li>{isProjectsPage ? (<Link to="/">PÁGINA INICIAL</Link>) : (<Link to="/projects">TODOS OS PROJETOS</Link>)}</li>
                        </ul>
                        <Popover.Arrow className="PopoverArrow" />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </ThemeProvider>

    )
}