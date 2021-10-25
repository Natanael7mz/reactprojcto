import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from '../config/colors';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1800px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  body, input, textarea, button {
    font: 400 1.5rem "serif";
  }
  button {
    cursor: pointer;
  }


  a {
    text-decoration: none;
  }
  li {
    list-style: none;


  }
  html{
    background: linear-gradient(
    90deg,
    hsla(239, 94%, 14%, 1) 0%,
    hsla(190, 68%, 50%, 1) 100%
    )
  }


  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.success}
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.error}
  }
`;

export const Container = styled.section`
  max-width: 1200px;
  margin: auto;
`;
