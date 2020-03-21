import React from 'react';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex'
  },
  avatar: {
    backgroundColor: 'red'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  btnReadMore: {
    marginLeft: 'auto'
  },
  actions: {
    margin: 5
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
      />
      <CardContent>some thing</CardContent>
    </Card>
  );
};
