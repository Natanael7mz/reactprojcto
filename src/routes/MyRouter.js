import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import P from 'prop-types';

export default function MyRouter({ component: Component, isClosed, ...rest }) {
  const isloggedIn = false;
  if (isClosed && !isloggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRouter.defaultProps = {
  isClosed: false,
};

MyRouter.propTypes = {
  component: P.oneOfType([P.element, P.func]).isRequired,
  isClosed: P.bool,
};
