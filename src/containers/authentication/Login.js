import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// actions
import { login } from '../../redux/actions/user.actions';
// components
import Login from '../../components/authentication/Login';

export default ({ area, history }) => {
  const dispatch = useDispatch();
  const ui = useSelector(state => state.ui);

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(loginInfo, history));
  };

  const handleChange = e => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Fragment>
      <Login
        ui={ui}
        loginInfo={loginInfo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        area={area}
      />
    </Fragment>
  );
};
