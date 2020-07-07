import React, { useState, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
  id: 'name' | 'event' | 'relationship';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 200 },
  { id: 'event', label: 'Events', minWidth: 200 },
  { id: 'relationship', label: 'Relationships', minWidth: 200 },
];

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

export default function FixedTable(): JSX.Element {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  // function handleChangePage(event: unknown, newPage: number) {
  //   return setPage(newPage);
  // }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // function handleChangeRowsPerPage(event: ChangeEvent<HTMLInputElement>) {
  //   setRowsPerPage(+event.target.value);
  //   return setPage(0);
  // }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.event}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 600,
  },
});
