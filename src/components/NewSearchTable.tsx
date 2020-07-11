import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import { Icons } from 'material-table';

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

// const tableIcons = {
//   // eslint-disable-next-line react/display-name
//   Search: () => <Search />,
// };

const tableIcons: Icons = {
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
