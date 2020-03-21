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
  const classes = useStyles();
  const {
    area,
    ui: { loading, errors },
    handleSubmit,
    handleChange,
    loginInfo: { email, password }
  } = props;

  const onSubmit = e => handleSubmit(e);
  const onChange = e => handleChange(e);
  return (
    <Fragment>
      <Typography component='h1' variant='h5'>
        Login
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <TextField
          variant='outlined'
          margin='normal'
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoFocus
          value={email}
          onChange={onChange}
          helperText={errors.email ? errors.email : null}
          error={errors.email ? true : false}
        />
        <TextField
          variant='outlined'
          margin='normal'
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          value={password}
          onChange={onChange}
          helperText={errors.password ? errors.password : null}
          error={errors.password ? true : false}
        />
        <FormControlLabel
          control={<Checkbox value='remember' color='primary' />}
          label='Remember me'
        />

        {errors.general && (
          <Typography
            variant='body2'
            color='error'
            className={classes.errorMessage}
          >
            {errors.general}
          </Typography>
        )}
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
              color='secondary'
              size={24}
              className={classes.progress}
            />
          )}
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Forgot password?
            </Link>
          </Grid>
          {area !== '/admin' && (
            <Grid item>
              <Link
                variant='body2'
                component={RouterLink}
                to={`${area}/signup`}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          )}
        </Grid>
      </form>
    </Fragment>
  );
};
