import React, { forwardRef } from 'react';
import { Icons } from 'material-table';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import MaterialTable from 'material-table';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';

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

export default function SearchResultsTable(props: { setData: any }): JSX.Element {
  const { setData } = props;
  console.log('setData: ', setData);
  const value = setData;

  return (
    <MaterialTable
      icons={tableIcons}
      title={' results'}
      columns={[
        {
          title: 'Name',
          field: 'person.name',
        },
        {
          title: 'Role',
          field: 'person.role',
        },
        {
          title: 'Collection Name',
          field: 'collectionName',
        },
      ]}
      data={value}
      detailPanel={() => {
        return (
          <iframe
            title="Detail Panel"
            width="100%"
            height="315"
            src={'https://ourroots.org/'}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      }}
      options={{
        headerStyle: {
          background: '#EEE',
        },
      }}
    />
  );
}
