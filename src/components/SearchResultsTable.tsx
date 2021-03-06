import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import LaunchIcon from '@material-ui/icons/Launch';
import Search from '@material-ui/icons/Search';
import MaterialTable, { Icons } from 'material-table';
import React, { forwardRef, useState } from 'react';
import { SearchHit, SearchResult } from '../util/useSearch';
// import SearchDetails from './SearchDetails';

// Rows per page, in global space so that it's sticky.
let rowsPerPage = 10;

type Props = {
  data: SearchResult;
};
export default function SearchResultsTable(props: Props): JSX.Element {
  const { data } = props;
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [detailRow, setDetailRow] = useState<SearchHit>();
  console.log('Click:', typeof detailRow);

  const handleClose = (): void => {
    setDetailRow(undefined);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>{detailRow?.person.name}</h2>

      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.grid}>
            <Typography>Name: {detailRow?.person.name}</Typography>
            <Typography>Role: {detailRow?.person.role}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} className={classes.image}></Grid>
        {/* -------------------------- */}
        <Grid item xs={8} className={classes.container}>
          <Typography>Event: {JSON.stringify(detailRow?.person.events)}</Typography>
          <Typography>Relationship: {JSON.stringify(detailRow?.person.relationships)}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Collection Name:{detailRow?.collectionName}</Typography>
          <Typography>Collection No: {JSON.stringify(detailRow?.collection)}</Typography>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div className={classes.table}>
      <MaterialTable
        icons={tableIcons}
        title={data.hits.length + ' results'}
        columns={[
          {
            title: 'Name',
            field: 'person.name',
            render: (_rowData) => {
              const events = JSON.stringify(_rowData.person.events);
              const relationships = JSON.stringify(_rowData.person.relationships);
              let eventRow;
              let relationshipRow;

              if (events !== undefined) {
                const arr = events.slice(1, events.length - 1).split(',');
                eventRow = arr.map((row) => (
                  <Typography className={classes.column}>{row}</Typography>
                ));
              }

              if (relationships !== undefined) {
                const arr = relationships.slice(1, relationships.length - 1).split(',');
                relationshipRow = arr.map((row) => (
                  <Typography className={classes.column}>{row}</Typography>
                ));
              }

              // const person = JSON.stringify(_rowData.person);
              // const result = person.slice(1, person.length - 1);
              // const arr = result.split(',');
              // console.log(arr);

              return (
                <div>
                  <Typography>Name: {_rowData.person.name}</Typography>
                  <Typography>Role: {_rowData.person.role}</Typography>
                  <Typography>Events: {eventRow}</Typography>
                  <Typography>Relationships: {relationshipRow}</Typography>
                  {/*
                  {arr.map((row) => (
                    <Typography>{row} </Typography>
                  ))} */}
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
            // icon: 'Add',
            icon: () => <LaunchIcon />,
            tooltip: 'Details',
            onClick: (_event, rowData) => setDetailRow(rowData as SearchHit),
          },
        ]}
        options={{
          headerStyle: {
            background: '#EEE',
          },
          pageSize: rowsPerPage,
          pageSizeOptions: [10, 25, 50, 100],
          emptyRowsWhenPaging: false,
        }}
        onChangeRowsPerPage={(size) => (rowsPerPage = size)}
      />
      <Modal
        open={!!detailRow}
        onClose={handleClose}
        aria-labelledby="details-modal-title"
        aria-describedby="details-modal-description"
      >
        {body}
      </Modal>
    </div>
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

function rand(): number {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle(): Record<string, string> {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      marginTop: theme.spacing(1),
    },
    paper: {
      position: 'fixed',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    grid: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    container: {
      marginTop: theme.spacing(3),
    },
    column: {
      marginLeft: theme.spacing(2),
    },
    image: {
      backgroundImage:
        'url(https://images.unsplash.com/photo-1467688695332-6b486449d78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  })
);
