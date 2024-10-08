import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`


    @font-face {
        font-family: 'Adero';
        src: url('./fonts/adero/AderotrialRegular-ZVreq.otf');
    }
    @font-face {
        font-family: 'Cyberfunk';
        src: url('./fonts/cyberfunk/Cyberfunk-RGyM.ttf');
    }

    @font-face {
        font-family: 'Cyberway';
        src: url('./fonts/cyberway/CyberwayRiders-lg97d.ttf');
    }

    :root {
        font-size: 62.5%;
        padding-inline: 10vw;
        scroll-behavior: smooth;
    }

    ::selection {
        background: #FF00FF;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        color: #fff;
        user-select: text;
    }

    body{
        scroll-behavior: smooth;
        font-family: 'Adero', monospace;
        background-color: #000010;
    }

    section{
        margin-bottom: 15rem ;
    }

    .glow{
        text-shadow:0 0 5px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff, 0 0 10px #ff00ff, 0 0 98px #ff00ff;
    }

    .subtitle{
        font-family: "Cyberfunk", monospace;
        color: #FFF;
        font-size: 3.5rem;
        text-transform: uppercase;
        margin-bottom: 2rem;
    }

    @media(max-width: 1366px){
        :root{
            padding-inline: 5rem;
        }
    }

    
	@media(max-width:850px){
		:root{
            padding-inline: 2.5rem;
        }

        .subtitle{
            font-size: 3rem;
            margin-bottom: 2rem;
            text-align: center;
        }

        section{
            margin-bottom: 10rem ;
        }
	}

`

const colors = {
    titleColor: " #fff",
    red: "#E0144C",
    paragraphColor: "#fcfcfc",
    darkPurple: "#000010",
    mediumPurple: "#250132",
    lightPurple: "#ff00ff",
    newPurple: "#A51FD6",
    lightBlue: "rgb(66, 66, 177)",
    blueNeonTextShadow: "0 0 5px rgb(124, 124, 253), 0 0 15px rgb(66, 66, 177), 0 0 20px rgb(66, 66, 177), 0 0 40px rgb(66, 66, 177), 0 0 60px rgb(66, 66, 177), 0 0 10px rgb(66, 66, 177), 0 0 98px rgb(66, 66, 177)",
    neonTextShadow: `0 0 5px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff, 0 0 10px #ff00ff, 0 0 98px #ff00ff`
}

export default colors