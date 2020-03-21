import React from 'react';
import Layout from '../AuthLayout';
import LoginContainer from '../../../containers/authentication/Login';

export default ({ history }) => {
  return (
    <Layout>
      <LoginContainer area='/admin' history={history} />
    </Layout>
  );
};
