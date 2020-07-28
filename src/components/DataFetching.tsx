import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching(): JSX.Element {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const newLocal = 'https://cms.ourroots.org/api/search?given=Fred';
    axios
      .get(proxyurl + newLocal)
      .then((res) => {
        console.log('Res', res);
        setPosts(res.data);
      })
      .catch(() => {
        console.log('Can’t access ' + newLocal + ' response. Blocked by browser?');
      });
  }, []);
  console.log('Post:', post);
  return <div>DataFetching</div>;
}
