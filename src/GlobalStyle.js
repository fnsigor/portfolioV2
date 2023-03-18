
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

:root {
    font-size: 62.5%;
}


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: #fff;
}


@font-face {
    font-family: 'Adero';
    src: url('./fonts/downlink/Downlink-gav1.ttf');
}

@font-face {
    font-family: 'Cyberfunk';
    src: url('./fonts/cyberfunk/Cyberfunk-RGyM.ttf');
}

@font-face {
    font-family: 'Cyberway';
    src: url('./fonts/cyberway/CyberwayRiders-lg97d.ttf');
}

body {
    font-family: 'Adero', monospace;
    background-color: #000010;
}


`

const colors = {
    titleColor: " #fff",
    paragraphColor: "#fcfcfc",
    darkPurple: "#000010",
    mediumPurple: "#250132",
    lightPurple: "#ff00ff",
    lightBlue: "rgb(66, 66, 177)",
    blueNeonTextShadow: "0 0 5px rgb(124, 124, 253), 0 0 15px rgb(66, 66, 177), 0 0 20px rgb(66, 66, 177), 0 0 40px rgb(66, 66, 177), 0 0 60px rgb(66, 66, 177), 0 0 10px rgb(66, 66, 177), 0 0 98px rgb(66, 66, 177)",
    neonTextShadow: `0 0 5px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff, 0 0 10px #ff00ff, 0 0 98px #ff00ff`
}

export default colors