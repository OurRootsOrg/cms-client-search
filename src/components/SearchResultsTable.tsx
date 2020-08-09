import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import MaterialTable, { Icons } from 'material-table';
import React, { forwardRef } from 'react';
import Typography from '@material-ui/core/Typography';
import { SearchResult } from '../util/useSearch';
import { makeStyles } from '@material-ui/core/styles';
import DetailsModal from './DetailsModal';

type Props = {
  data: SearchResult;
};
export default function SearchResultsTable(props: Props): JSX.Element {
  const { data } = props;
  const classes = useStyles();

  console.log('Data:', data);

  return (
    <MaterialTable
      icons={tableIcons}
      title={data.total + ' results'}
      columns={[
        {
          title: 'Name',
          field: 'person.name',
          render: (_rowData) => {
            return (
              <div className={classes.root}>
                <Typography>{_rowData.person.name}</Typography>
                <Typography>{_rowData.person.role}</Typography>
              </div>
            );
          },
        },
        {
          title: 'Collection Name',
          field: 'collectionName',
        },
        {
          title: 'Collection',
          field: 'collection',
        },
      ]}
      data={data.hits}
      actions={[
        {
          icon: 'save',
          tooltip: 'Details',
          onClick: (_event) => <DetailsModal />,
        },
      ]}
      options={{
        headerStyle: {
          background: '#EEE',
        },
      }}
    />
  );
}

const tableIcons: Icons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
};

const useStyles = makeStyles({
  root: {
    display: 'inline',
  },
});
