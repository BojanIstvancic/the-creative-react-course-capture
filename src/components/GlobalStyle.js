import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1b1b1b;
  font-family: 'Inter', sans-serif;
}

button {
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d977;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'Inter', sans-serif;
  &:hover {
    background: #23d977;
    color: white;
  }
}
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  h3 {
    color: white;
  }
  h4 {
    font-size: 2rem;
    font-weight: bold;
  }
  a {
    font-size: 1.1.rem;
  }
  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
  span {
    font-weight: bold;
    color: #23d977;
  }
`;

export default GlobalStyle;
