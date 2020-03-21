import React from 'react';
import Layout from '../AuthLayout';
import SignupContainer from '../../../containers/authentication/Signup';

export default ({ history }) => {
  return (
    <Layout>
      <SignupContainer area='admin' history={history} />
    </Layout>
  );
};
