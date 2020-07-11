import React from 'react';
import MaterialTable from 'material-table';

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

export default function RowStyling(): JSX.Element {
  const results = rows.length;
  return (
    <MaterialTable
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
