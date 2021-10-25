import React from 'react';
import { Switch } from 'react-router-dom';
import MyRouter from './MyRouter';

import Home from '../pages/Home';
import Error from '../pages/Erros404';
import Aluno from '../pages/Aluno';
import Login from '../pages/Login';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Switch>
      <MyRouter exact path="/" component={Home} isClosed={false} />
      <MyRouter exact path="/aluno/" component={Aluno} isClosed />
      <MyRouter exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRouter exact path="/login/" component={Login} isClosed={false} />
      <MyRouter exact path="/fotos/:id/" component={Fotos} isClosed />
      <MyRouter exact path="/register/" component={Register} isClosed={false} />
      <MyRouter exact path="*" component={Error} />
    </Switch>
  );
}
