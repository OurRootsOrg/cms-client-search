import React from 'react';
import MaterialTable from 'material-table';

function createData(
  name: string,
  event: string,
  relationship: string
): {
  name: string;
  event: string;
  relationship: string;
} {
  return { name, event, relationship };
}

const rows = [
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
  createData('John Anderson', 'Birth: 1887', 'Spouse: Martha Johnson'),
];

export default function RowStyling(): JSX.Element {
  const results = rows.length;
  return <MaterialTable title={results + ' results'} />;
}
