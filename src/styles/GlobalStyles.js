import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
    height: 100vh;
    width: 100vw;
    background-color: rgb(69, 69, 69);
    font-family: 'Inter', sans-serif;
}
`;

export {GlobalStyles};