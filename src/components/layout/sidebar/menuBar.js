import React from 'react';

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import RecipeIcon from '@material-ui/icons/LocalDining';
import ReviewRecipeIcon from '@material-ui/icons/RateReview';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import UserIcon from '@material-ui/icons/People';

const menuBar = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/admin/'
  },
  {
    label: 'User',
    icon: <UserIcon />,
    path: '/admin/users'
  },
  {
    label: 'Recipe',
    icon: <RecipeIcon />,
    path: '/admin/recipes'
  },
  {
    label: 'Review Recipe',
    icon: <ReviewRecipeIcon />,
    path: '/admin/review-recipes'
  },
  {
    label: 'Blog',
    icon: <ImportContactsIcon />,
    path: '/admin/blogs'
  }
];

export default menuBar;
