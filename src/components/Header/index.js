import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Containe } from './styled';

export default function Heade() {
  return (
    <Container>
      <Containe>
        <div className="logo">Logo</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/register/"> Register</Link>
          <Link className="logi" to="/login/">
            Login
          </Link>
        </div>
      </Containe>
    </Container>
  );
}
