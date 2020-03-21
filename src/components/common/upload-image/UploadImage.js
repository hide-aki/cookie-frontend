import React, { useState } from 'react';
import clsx from 'clsx';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import PublishIcon from '@material-ui/icons/Publish';

// Components
import CustomIconButton from '../CustomIconButton';

const useStyles = makeStyles(theme => ({
  uploadContainer: {
    height: 150
  },
  uploadArea: {
    float: 'left'
  },
  previewImage: {
    width: 150
  },
  previewArea: {
    float: 'right',
    width: 250,
    position: 'relative'
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    top: 0
  }
}));

export default ({
  image,
  imagePreviewUrl,
  handleChangeImage,
  handleRemoveImage
}) => {
  const classes = useStyles();

  const handleChange = e => {
    handleChangeImage(e);
  };

  const handleUploadImage = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };

  const handleRemove = () => {
    handleRemoveImage();
  };
  const hasPreviewImage = imagePreviewUrl.length > 0 ? true : false;

  return (
    <div
      className={clsx({
        [classes.uploadContainer]: hasPreviewImage
      })}
    >
      <div
        className={clsx({
          [classes.uploadArea]: hasPreviewImage
        })}
      >
        <input
          id='imageInput'
          type='file'
          onChange={handleChange}
          hidden={true}
        />
        <CustomIconButton tip='upload image' onClick={handleUploadImage}>
          <PublishIcon />
        </CustomIconButton>
        <span>{hasPreviewImage ? image.name : 'Upload Image'}</span>
      </div>
      {imagePreviewUrl.length > 0 && (
        <Paper className={classes.previewArea}>
          <img
            src={imagePreviewUrl}
            alt='article'
            className={classes.previewImage}
          />

          <CustomIconButton
            tip='Remove image'
            onClick={handleRemove}
            btnClassName={classes.deleteButton}
          >
            <DeleteIcon />
          </CustomIconButton>
        </Paper>
      )}
    </div>
  );
};
