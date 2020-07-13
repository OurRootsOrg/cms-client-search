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
  { name: 'Jhn Anderson', events: 'Birth: 1923', relationship: 'Spouse: Anna Smith Anderson' },
  { name: 'ohn Anderson', events: 'Birth: 1880', relationship: 'Spouse: Nicole Olsen' },
  { name: 'John Anderson', events: 'Birth: 1886', relationship: 'Spouse: Helen Mayfield' },
  { name: 'Jon Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jhn Anderson', events: 'Birth: 1923', relationship: 'Spouse: Anna Smith Anderson' },
  { name: 'ohn Anderson', events: 'Birth: 1880', relationship: 'Spouse: Nicole Olsen' },
  { name: 'John Anderson', events: 'Birth: 1886', relationship: 'Spouse: Helen Mayfield' },
  { name: 'Jon Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jhn Anderson', events: 'Birth: 1923', relationship: 'Spouse: Anna Smith Anderson' },
  { name: 'ohn Anderson', events: 'Birth: 1880', relationship: 'Spouse: Nicole Olsen' },
  { name: 'John Anderson', events: 'Birth: 1886', relationship: 'Spouse: Helen Mayfield' },
];

export default function SearchResultsTable(): JSX.Element {
  const results = rows.length;
  return (
    <MaterialTable
      icons={tableIcons}
      title={results + ' results'}
      columns={[
        {
          title: 'Name',
          field: 'name',
        },
        {
          title: 'Events',
          field: 'events',
        },
        {
          title: 'Relationship',
          field: 'relationship',
        },
      ]}
      data={rows}
      options={{
        headerStyle: {
          background: '#EEE',
        },
      }}
    />
  );
}
