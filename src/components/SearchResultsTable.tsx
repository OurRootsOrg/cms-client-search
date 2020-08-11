import Modal from '@material-ui/core/Modal';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import MaterialTable, { Icons } from 'material-table';
import React, { forwardRef, useState } from 'react';
import { SearchResult } from '../util/useSearch';

type Props = {
  data: SearchResult;
};
export default function SearchResultsTable(props: Props): JSX.Element {
  const { data } = props;
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [detailRow, setDetailRow] = useState();

  const handleClose = (): void => {
    setDetailRow(undefined);
  };

  //Temporary -------------------------- TODO : need to add row data to modal, add photos and details
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Text in a modal</h2>
      <p>
        Officia occaecat dolor incididunt elit qui id ut ut minim minim culpa excepteur. Laboris
        aute enim Lorem voluptate. Ex veniam eu sunt veniam ad nulla Lorem aliquip ea. Culpa et
        ullamco velit do voluptate veniam dolor amet minim. Commodo commodo minim fugiat sunt sint.
        Velit voluptate dolor consequat velit fugiat nisi voluptate sint in sunt incididunt ullamco.
        Irure pariatur sit cupidatat nostrud ex veniam anim ex esse elit sunt officia aliqua.
        Exercitation ex culpa pariatur proident ipsum sint amet proident et sunt cillum do. Fugiat
        nostrud qui id ut ea est. Eu amet esse aliquip aliqua eu incididunt consectetur proident
        exercitation exercitation deserunt aliqua. Voluptate ut proident reprehenderit mollit amet.
        Ipsum eu reprehenderit consectetur voluptate laborum excepteur reprehenderit laborum dolore
        Lorem enim eu.
      </p>
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
              return (
                <div>
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
            icon: 'add',
            tooltip: 'Details',
            onClick: (_event, _rowData: any) => setDetailRow(_rowData),
          },
        ]}
        options={{
          headerStyle: {
            background: '#EEE',
          },
        }}
      />
      <Modal
        open={!!detailRow}
        onClose={handleClose}
        aria-labelledby="details-modal-title"
        aria-describedby="details-modal-description"
        // data={detailRow} // ----------------------- https://material-ui.com/api/modal/
      >
        {body}
      </Modal>
    </div>
  );
}

// only the save icon in the action i co is not showing up on the material-table
const tableIcons: Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
};

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
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
      // width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);
