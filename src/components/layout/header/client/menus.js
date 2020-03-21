import React from 'react';

// Icons
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CollectionsIcon from '@material-ui/icons/Collections';

const menus = [
  { label: 'Recipe', icon: <LocalDiningIcon />, path: '/recipe' },
  { label: 'Blog', icon: <ImportContactsIcon />, path: '/blog' },
  { label: 'Social', icon: <PostAddIcon />, path: '/social' },
  { label: 'Collection', icon: <CollectionsIcon />, path: '/collection' }
];

export default menus;
