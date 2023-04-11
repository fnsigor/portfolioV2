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
                        <a href=""><BsWhatsapp /></a>
                    </li>
                    <li>
                        <a href=""><BsLinkedin /></a>
                    </li>
                    <li>
                        <a href=""><BsGithub /></a>
                    </li>
                    <li>
                        <a href=""><BsTwitter /></a>
                    </li>
                    <li>
                        <SiFrontendmentor />
                    </li>
                </ul>

            </address>
        </Content>
    )
}