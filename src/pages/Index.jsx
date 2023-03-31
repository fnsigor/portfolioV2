import styled, { ThemeProvider } from 'styled-components';
import colors from '../globalStyle';
import { useLoaderData } from "react-router-dom";


import { SectionAbout } from './sections/SectionAbout';
import { SectionStack } from './sections/SectionStack';
import { SectionProjects } from './sections/SectionProjects';
import { SectionContact } from './sections/SectionContact';
import { Header } from './sections/Header';
import { Footer } from './sections/Footer';


export function Index() {

	const { pinnedItems } = useLoaderData()


	const PageContent = styled.div`

		

			
`

	return (
		<ThemeProvider theme={colors}>


			<Header />
			<main>
				<SectionAbout />
				<SectionStack />
				<SectionProjects pinnedItems={pinnedItems} />
				<SectionContact />
			</main>
			<Footer />

		</ThemeProvider>

	)
}

