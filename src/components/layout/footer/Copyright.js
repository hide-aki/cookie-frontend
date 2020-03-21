import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI stuff
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default () => (
  <Typography
    variant='body2'
    color='textSecondary'
    style={{ textAlign: 'center' }}
  >
    {'Copyright © '}
    <Link color='inherit' component={RouterLink} to='/admin'>
      Cookie
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
