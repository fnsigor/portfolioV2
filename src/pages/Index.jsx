import { ThemeProvider } from 'styled-components';
import colors from '../GlobalStyles';
import { useLoaderData, useLocation } from "react-router-dom";
import { SectionAbout } from './sections/SectionAbout';
import { SectionStack } from './sections/SectionStack';
import { SectionProjects } from './sections/SectionProjects';
import { SectionContact } from './sections/SectionContact';
import { Header } from './sections/Header';
import { Footer } from './sections/Footer';
import { RadixToast } from '../components/RadixToast/';
import { useState } from 'react';
import { EmailContext } from '../EmailContext';
import { useEffect } from 'react';
import { useScrollToTop } from '../useScrollToTop';


export function Index() {

	const { pinnedItems } = useLoaderData()

	const {pathname} = useLocation()

	const verifyPath = useScrollToTop()

	verifyPath(pathname)

	const [enviadoComSucesso, setEnviadoComSucesso] = useState(null)

	useEffect(() => { //Clean State Function
		setTimeout(() => {
			setEnviadoComSucesso(null)
		}, 2000)
	}, [enviadoComSucesso])



	return (
		<ThemeProvider theme={colors}>
			<EmailContext.Provider value={[enviadoComSucesso, setEnviadoComSucesso]} >

				<Header />
				<main>
					<SectionAbout />
					<SectionStack />
					<SectionProjects pinnedItems={pinnedItems} />
					<SectionContact />
				</main>
				<Footer />
				{enviadoComSucesso !== null ? <RadixToast enviadoComSucesso={enviadoComSucesso} /> : null}

			</EmailContext.Provider>
		</ThemeProvider>

	)
}

