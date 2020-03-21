import React, { forwardRef, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useDispatch, useSelector } from 'react-redux';
// actions
import { getAllArticle } from '../../redux/actions/article.actions';

// Icons
import AddIcon from '@material-ui/icons/Add';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const columns = [
  { field: 'articleId', hidden: true },
  { title: 'Article Name', field: 'name' },
  { title: 'Author', field: 'author' },
  { title: 'Short Description', field: 'shortDescription' },
  { title: 'Date Created', field: 'createdAt' }
];

export default ({ handleOpen }) => {
  const dispatch = useDispatch();
  const articleReducer = useSelector(state => state.article);
  const uiReducer = useSelector(state => state.ui);

  const { articles } = articleReducer;
  const { loading } = uiReducer;

  useEffect(() => {
    dispatch(getAllArticle());
  }, []);
  return (
    <MaterialTable
      title='Free Action Preview'
      columns={columns}
      data={articles}
      icons={tableIcons}
      isLoading={loading}
      actions={[
        {
          icon: () => <AddIcon />,
          tooltip: 'Add article',
          isFreeAction: true,
          onClick: handleOpen
        },
        {
          icon: () => <EditIcon />,

          tooltip: 'Edit Article',
          onClick: handleOpen
        },
        {
          icon: () => <DeleteOutlineIcon />,
          tooltip: 'Delete Article',
          onClick: (event, rowData) =>
            alert('You want to delete ' + rowData.name)
        }
      ]}
      options={{
        actionsColumnIndex: -1
      }}
    />
  );
};
