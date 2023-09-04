import styled from 'styled-components';
import { RadixPopUp } from '../../components/RadixPopUp';


const Content = styled.section`

		.stack-list{
			display: flex;
			gap: 3rem;
			justify-content: flex-start;
			flex: 1;
		}

		.stack-list span{
			font-size: 3rem;
		}

		.react-libs{
			height: 300px;
			width: 300px;
		}

        @media(max-width:850px){

            margin-inline:auto;

            .stack-list{
                flex-direction: column;
                align-items: center;
            }

            .stack-list span{
                font-size: 2.25rem;
            }
        }

`


export function SectionStack() {





    return (
        <Content className="stack-section" id='stack'>
            <h4 className="subtitle glow">Stack</h4>
            <ul className="stack-list">
                <li><span>JavaScript</span></li>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li>
                    <RadixPopUp
                        color="#5ccfee"
                        itemName="React"
                        popUpTitle="Ferramentas"
                        popUpDescription="Styled Components, Redux, React Router, Radix UI, React Hook Form, Nextjs, Core UI, React Query" />
                </li>
                <li><span>GIT</span></li>
                <li><span>Sass</span></li>
                <li><span>TypeScript</span></li>
                <li><span>Figma</span></li>
            </ul>
        </Content>

    )
}