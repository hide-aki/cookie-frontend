import React, { Fragment } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useStyles from '../../utils/styles';

// MUI stuff
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

// components
import UploadImage from '../common/upload-image/UploadImage';

export default props => {
  const classes = useStyles();
  const {
    ui: { loading },
    formTitle,
    blogInfo,
    handleChange,
    handleChangeImage,
    handleChangeQuill,
    handleSubmit,
    handleRemoveImage
  } = props;

  const onChange = e => handleChange(e);
  const onChangeImage = e => handleChangeImage(e);
  const onChangeQuill = e => handleChangeQuill(e);
  const onSubmit = e => handleSubmit(e);
  const onRemoveImage = e => handleRemoveImage(e);

  return (
    <Fragment>
      <DialogTitle id='form-dialog-title'>{formTitle}</DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <TextField
            margin='normal'
            id='name'
            name='name'
            type='text'
            label='Article Name'
            fullWidth
            value={blogInfo.name}
            onChange={onChange}
          />
          <TextField
            margin='normal'
            id='shortDescription'
            name='shortDescription'
            type='text'
            label='Short Description'
            fullWidth
            value={blogInfo.shortDescription}
            onChange={onChange}
          />
          <UploadImage
            className={classes.uploadImage}
            image={blogInfo.image}
            imagePreviewUrl={blogInfo.imagePreviewUrl}
            handleChangeImage={onChangeImage}
            handleRemoveImage={onRemoveImage}
          />
          <ReactQuill
            value={blogInfo.content}
            placeholder={'Enter new content here...'}
            style={{ height: 200, margin: '25px 0 60px 0' }}
            onChange={onChangeQuill}
          />

          <DialogActions>
            <Button
              variant='contained'
              color='primary'
              onClick={onSubmit}
              disabled={loading}
              className={classes.submit}
            >
              {loading && (
                <CircularProgress size={24} className={classes.progress} />
              )}
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Fragment>
  );
};
