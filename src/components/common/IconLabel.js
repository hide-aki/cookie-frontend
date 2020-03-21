import React, { Fragment } from 'react';

// MUI stuff
import Tooltip from '@material-ui/core/Tooltip';

export default ({ children, label, tip }) => {
  return (
    <Fragment>
      <Tooltip title={tip} placement='top'>
        {children}
      </Tooltip>

      <span style={{ marginRight: 8 }}>{label}</span>
    </Fragment>
  );
};
