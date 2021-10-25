import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { CenterHome } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Home() {
  const dispatch = useDispatch();
  dispatch(actions.config());
  return (
    <Container>
      <CenterHome>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
        <p>CONTEUDO</p>
      </CenterHome>
    </Container>
  );
}
