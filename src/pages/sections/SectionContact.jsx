import styled from 'styled-components';
import { BsWhatsapp, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiFrontendmentor } from 'react-icons/si'
import { RadixDialogForm } from '../../components/RadixDialogForm';


const Content = styled.section`
	
.contactsUl{
    display: flex;
    gap: 8rem;
    justify-content: flex-start;
}

.contactsUl li{
    height: 6rem;
    width: 6rem;
}

svg{
    height:100%;
    width: 100%;
}

`



export function SectionContact() {




    return (
        <Content>
            <h4 className="subtitle glow">Contato e Redes Sociais</h4>
            <address className="content">
                <ul className="contactsUl">
                    <li>
                        <RadixDialogForm />
                    </li>
                    <li>
                        <a href="https://wa.me/5548984489254?text=Olá,%20vim%20através%20do%20seu%20portfólio!" target="_blank"><BsWhatsapp title='Zap' /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/fnsigor" target="_blank"><BsLinkedin title='LinkedIn' /></a>
                    </li>
                    <li>
                        <a href="https://github.com/fnsigor" target="_blank"><BsGithub title='GitHub' /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/fnsigor" target="_blank"><BsTwitter title='Twitter' /></a>
                    </li>
                    <li>
                        <a href="https://www.frontendmentor.io/profile/fnsigor" target="_blank"> <SiFrontendmentor title='Frontendmentor.io' /></a>
                    </li>
                </ul>

            </address>
        </Content>
    )
}