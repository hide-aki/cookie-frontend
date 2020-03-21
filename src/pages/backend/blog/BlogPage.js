import React, { useState, Fragment } from 'react';
// containers
import ArticleActions from '../../../containers/blog/ArticleActions';
import ListArticle from '../../../containers/blog/ListArticle';

export default () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <ListArticle handleOpen={handleOpen} />
      <ArticleActions open={open} handleClose={handleClose} />
    </Fragment>
  );
};
