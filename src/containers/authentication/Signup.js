import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// actions
import { signup } from '../../redux/actions/user.actions';
// components
import Signup from '../../components/authentication/Signup';

export default ({ area, history }) => {
  const dispatch = useDispatch();
  const ui = useSelector(state => state.ui);
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup(signupInfo, history));
  };
  const handleChange = e => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Signup
      area={area}
      ui={ui}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
