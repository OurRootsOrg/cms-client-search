import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function SearchResultsTable(): JSX.Element {
  const classes = useStyles();

  function createData(name: string, event: string, relationship: string) {
    return { name, event, relationship };
  }

  const rows = [createData('John Anderson', '', ''), createData('Jon Anderson', '', '')];

  return (
    <TableContainer className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Events</TableCell>
            <TableCell>Relationships</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"> {row.event}</TableCell>
              <TableCell align="right"> {row.relationship} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    // --------------------------------------------
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
