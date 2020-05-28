import { Link, navigate, RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as c from './App.style';
import Hello from './components/Hello';
import Search from './components/Search';
import logo from './logo.svg';
import SearchRecords from './components/SearchRecords';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SignUp from './components/SignUp';

export default function App(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <nav css={c.nav}>
        <NavLink to="/">{t('Home')}</NavLink>
        <NavLink to="welcome">{t('Welcome')}</NavLink>
        <NavLink to="search">{t('Search')}</NavLink>
      </nav>
      <Router>
        <Home path="/" />
        <Welcome path="/welcome" />
        <SearchForm path="/search" />
      </Router>
    </div>
  );
}

type NavProps = RouteComponentProps & {
  to: string;
  children?: React.ReactNode;
};
function NavLink(props: NavProps): JSX.Element {
  return (
    <Link
      css={c.navLink}
      {...props}
      getProps={({ isCurrent }) => ({ active: isCurrent.toString() })}
    />
  );
}

function Copyright(_props: RouteComponentProps): JSX.Element {
  return (
    <Box mt={5}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'OurRoots Copyright © '}
        {new Date().getFullYear()}{' '}
      </Typography>
    </Box>
  );
}

function Home(_props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const code = '<code>src/*.tsx</code>';
  return (
    <div css={c.app}>
      <header css={c.appHeader}>
        <img src={logo} css={c.appLogo} alt="logo" />
        <p
          dangerouslySetInnerHTML={{
            __html: t('Instructions', { code, interpolation: { escapeValue: false } }),
          }}
        />
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('Learn')}
        </a>
      </header>
    </div>
  );
}

function Welcome(_props: RouteComponentProps): JSX.Element {
  return (
    <div css={c.welcome}>
      <Hello compiler="TypeScript" framework="React" />
      <Search />
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Home
      </Button>
      <Copyright />
    </div>
  );
}

function SearchForm(_props: RouteComponentProps): JSX.Element {
  return (
    <div css={c.search}>
      <SearchRecords />
      <SignUp />
      <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
        Home
      </Button>
      <Copyright />
    </div>
  );
}
