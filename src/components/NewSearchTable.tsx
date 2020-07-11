import React, { forwardRef } from 'react';
import { Icons } from 'material-table';
import MaterialTable from 'material-table';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';

const rows = [
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
  { name: 'John Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jon Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'Jhn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
  { name: 'ohn Anderson', events: 'Birth: 1887', relationship: 'Spouse: Martha Johnson' },
];

const tableIcons: Icons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
};

export default function RowStyling(): JSX.Element {
  const results = rows.length;
  return (
    <MaterialTable
      icons={tableIcons}
      title={results + ' results'}
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Events', field: 'events' },
        { title: 'Relationship', field: 'relationship' },
      ]}
      data={rows}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
        },
      }}
    />
  );
}
