import React from 'react';

// MUI stuff
import Container from '@material-ui/core/Container';

export default ({ children }) => {
  return (
    <Container style={{ marginTop: 80, marginBottom: 20 }}>
      {children}
    </Container>
  );
};
