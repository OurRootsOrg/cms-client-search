import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { fixSearchParams, useSearch } from './useSearch';

const mock = new MockAdapter(axios);

type Props = {
  params: Record<string, string>;
};
function SearchTest(props: Props): JSX.Element {
  const { params } = props;
  const { state, data } = useSearch(params);

  // function doSubmit(data: unknown): void {
  //   console.log('Submitted', data);
  //   setParams({ given: 'Barney' });
  // }
  return (
    <div>
      State: {JSON.stringify(state)}, Data: {JSON.stringify(data)}
    </div>
  );
}

describe('useSearch', () => {
  test('makes simple query', async () => {
    mock.onGet('https://cms.ourroots.org/api/search?given=John').reply(200, {
      hits: [
        {
          person: { name: 'John Smith', role: 'principal' },
        },
      ],
    });
    render(<SearchTest params={{ given: 'John' }} />);
    expect(screen.getByText(/"isLoading":true/)).toBeInTheDocument();
    expect(screen.queryByText(/John Smith/)).toBeNull();

    expect(await screen.findByText(/John Smith/)).toBeInTheDocument();
  });

  test('fixes search parameters', () => {
    const formValues = {
      birthDate: '1920',
      exactToYears: true,
      given: 'george',
      givenExact: true,
      surnameExact: false,
      marriageDate: '',
      marriagePlace: '',
      residenceDate: '',
      residencePlace: '',
      surname: '',
    };

    const params = fixSearchParams(formValues);

    expect(params.givenFuzziness).toEqual(1);
    expect(params.surnameFuzziness).toBeUndefined();
    expect((params as Record<string, string>).givenExact).toBeUndefined();
    expect((params as Record<string, string>).surnameExact).toBeUndefined();
  });
});
