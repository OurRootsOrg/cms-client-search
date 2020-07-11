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
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
};

const rows = [
  {
    name: 'John Anderson',
    events: 'Birth: 1886, Marriage: 1912',
    relationship: 'Spouse: Martha Johnson',
  },
  { name: 'Jon Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jhn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'ohn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'John Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jon Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jhn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'ohn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'John Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jon Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jhn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'ohn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'John Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jon Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jhn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'ohn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'John Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jon Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jhn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'ohn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
];

export default function RowStyling(): JSX.Element {
  const results = rows.length;
  return (
    <MaterialTable
      icons={tableIcons}
      title={results + ' results'}
      columns={[
        {
          title: 'Name',
          field: 'name',
          headerStyle: {
            backgroundColor: '#EEE',
          },
        },
        {
          title: 'Events',
          field: 'events',
          headerStyle: {
            backgroundColor: '#EEE',
          },
        },
        {
          title: 'Relationship',
          field: 'relationship',
          headerStyle: {
            backgroundColor: '#EEE',
          },
        },
      ]}
      data={rows}
    />
  );
}
