import axios from 'axios';
import React, { forwardRef, useState, useEffect } from 'react';
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

export default function SearchResultsTable(): JSX.Element {
  const [post, setPosts] = useState([]);
  const results = post.length;

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MaterialTable
      icons={tableIcons}
      title={results + ' results'}
      columns={[
        {
          title: 'Id',
          field: 'id',
        },
        {
          title: 'Title',
          field: 'title',
        },
        {
          title: 'Body',
          field: 'body',
        },
      ]}
      data={post}
      options={{
        headerStyle: {
          background: '#EEE',
        },
      }}
    />
  );
}
