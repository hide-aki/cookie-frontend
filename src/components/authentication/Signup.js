import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from '../../utils/styles';

// MUI stuff
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default props => {
  const {
    area,
    signupInfo,
    handleChange,
    handleSubmit,
    ui: { loading, errors }
  } = props;
  const classes = useStyles();

  const onSubmit = e => handleSubmit(e);
  const onChange = e => handleChange(e);
  return (
    <Fragment>
      <Typography component='h1' variant='h5'>
        Signup
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              value={signupInfo.email}
              onChange={onChange}
              helperText={errors.email ? errors.email : null}
              error={errors.email ? true : false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              fullWidth
              id='username'
              label='Nick name'
              name='username'
              value={signupInfo.username}
              onChange={onChange}
              helperText={errors.username ? errors.username : null}
              error={errors.username ? true : false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={signupInfo.password}
              onChange={onChange}
              helperText={errors.password ? errors.password : null}
              error={errors.password ? true : false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              fullWidth
              name='confirmPassword'
              label='Confirm Password'
              type='password'
              id='confirmPassword'
              value={signupInfo.confirmPassword}
              onChange={onChange}
              helperText={
                errors.confirmPassword ? errors.confirmPassword : null
              }
              error={errors.confirmPassword ? true : false}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value='allowExtraEmails' color='primary' />}
              label='I want to receive inspiration, marketing promotions and updates via email.'
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          disabled={loading}
        >
          {loading && (
            <CircularProgress
              className={classes.progress}
              size={24}
              color='secondary'
            />
          )}
          Sign Up
        </Button>
        <Grid container justify='flex-end'>
          <Grid item>
            <Link variant='body2' component={RouterLink} to={`${area}/login`}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};
