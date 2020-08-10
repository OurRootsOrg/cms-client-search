import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import Search from './Search';

const mock = new MockAdapter(axios);

describe('Search', () => {
  test('renders Search', () => {
    render(<Search />);
  });

  test('initially retrieves "react" documents', async () => {
    mock.onGet('https://hn.algolia.com/api/v1/search?query=react').reply(200, {
      hits: [
        { objectID: 'JS', url: 'link1', title: 'John Smith' },
        { objectID: 'FW', url: 'link2', title: 'Fred Williams' },
      ],
    });
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
    expect(screen.queryByText(/John Smith/)).toBeNull();

    expect(await screen.findByText(/John Smith/)).toBeInTheDocument();
    expect(screen.queryByText(/Loading/)).toBeNull();
  });

  test('retrieves query documents', async () => {
    mock.onGet('https://hn.algolia.com/api/v1/search?query=foo').reply(200, {
      hits: [
        { objectID: 'FF', url: 'link10', title: 'Foo Farmer' },
        { objectID: 'BB', url: 'link20', title: 'Bar Barney' },
      ],
    });
    render(<Search />);
    const query = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button');

    fireEvent.change(query, {
      target: { value: 'foo' },
    });
    fireEvent.click(submitButton);

    expect(await screen.findByText(/Bar Barney/)).toBeInTheDocument();
    expect(screen.queryByText(/Loading/)).toBeNull();
  });
});
