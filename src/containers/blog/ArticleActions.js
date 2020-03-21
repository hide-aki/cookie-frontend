import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// MUI stuff
import Dialog from '@material-ui/core/Dialog';
// actions
import { addNewArticle } from '../../redux/actions/article.actions';
// components
import ArticleActions from '../../components/blog/ArticleActions';

const initState = {
  name: '',
  shortDescription: '',
  content: '',
  imagePreviewUrl: '',
  image: ''
};

export default ({ blog, open, handleClose }) => {
  const dispatch = useDispatch();
  const ui = useSelector(state => state.ui);
  // const article = useSelector(state => state.article);

  const [blogInfo, setBlogInfo] = useState(initState);

  const { success } = ui;

  useEffect(() => {
    setBlogInfo(initState);
    if (success) {
      handleCloseDialog();
    }
  }, [success]);

  const handleCloseDialog = () => handleClose();
  const handleChange = e => {
    setBlogInfo({
      ...blogInfo,
      [e.target.name]: e.target.value
    });
  };
  const handleChangeQuill = value => {
    setBlogInfo({
      ...blogInfo,
      content: value
    });
  };
  const handleChangeImage = e => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = () => {
      setBlogInfo({
        ...blogInfo,
        image: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };
  const handleRemoveImage = () => {
    setBlogInfo({
      ...blogInfo,
      image: '',
      imagePreviewUrl: ''
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addNewArticle(blogInfo));
  };

  const formTitle =
    blog && blog.id ? `Edit ${blog.name} article` : 'New Article';
  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      aria-labelledby='form-dialog-title'
      fullWidth={true}
      maxWidth='md'
    >
      <ArticleActions
        formTitle={formTitle}
        ui={ui}
        blogInfo={blogInfo}
        handleChange={handleChange}
        handleChangeImage={handleChangeImage}
        handleChangeQuill={handleChangeQuill}
        handleSubmit={handleSubmit}
        handleRemoveImage={handleRemoveImage}
      />
    </Dialog>
  );
};
