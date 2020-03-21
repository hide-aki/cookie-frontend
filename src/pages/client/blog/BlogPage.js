import React from 'react';
import Layout from '../Layout';

// MUI stuff
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Components
import ItemBlog from '../../../components/blog/ItemBlog';

export default () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          <ItemBlog />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper style={{ padding: 25 }}>related post</Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};
