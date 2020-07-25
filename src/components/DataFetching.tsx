import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching(): JSX.Element {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('Post:', post);
  return <div>Hello World</div>;
}
