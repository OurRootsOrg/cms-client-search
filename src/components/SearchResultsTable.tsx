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
          onClick: (_event, _rowData) => alert('You saved'),
        },
      ]}
      // ------------------------------------->
      // detailPanel={() => {
      //   return (
      //     <iframe
      //       title="Detail Panel"
      //       width="100%"
      //       height="315"
      //       src={'https://ourroots.org/'}
      //       frameBorder="0"
      //       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      //       allowFullScreen
      //     />
      //   );
      // }}
      // ------------------------------------->
      // detailPanel={[
      //   {
      //     tooltip: 'Show Name',
      //     render: (_rowData) => {
      //       return (
      //         <div
      //           style={{
      //             fontSize: 100,
      //             textAlign: 'center',
      //             color: 'white',
      //             backgroundColor: '#43A047',
      //           }}
      //         >
      //           {_rowData.person.role}
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     icon: 'account_circle',
      //     tooltip: 'Show Surname',
      //     render: (_rowData) => {
      //       return (
      //         <div
      //           style={{
      //             fontSize: 100,
      //             textAlign: 'center',
      //             color: 'white',
      //             backgroundColor: '#E53935',
      //           }}
      //         >
      //           {_rowData.person.role}
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     icon: 'favorite_border',
      //     openIcon: 'favorite',
      //     tooltip: 'Show Both',
      //     render: (_rowData) => {
      //       return (
      //         <div
      //           style={{
      //             fontSize: 100,
      //             textAlign: 'center',
      //             color: 'white',
      //             backgroundColor: '#FDD835',
      //           }}
      //         >
      //           {_rowData.person.role} {_rowData.person.role}
      //         </div>
      //       );
      //     },
      //   },
      // ]}
      // ------------------------------------->
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
