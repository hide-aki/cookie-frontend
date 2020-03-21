import React from 'react';

// MUI stuff
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

export default ({ children, btnClassName, tip, onClick }) => {
  return (
    <Tooltip placement='top' title={tip}>
      <IconButton onClick={onClick} className={btnClassName}>
        {children}
      </IconButton>
    </Tooltip>
  );
};
