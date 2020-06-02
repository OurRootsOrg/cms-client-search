import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link, navigate, RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Hello from './components/Hello';
import SearchQuery from './components/Search';
import SearchForm from './components/Form';
import logo from './logo.svg';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function App(): JSX.Element {
  const classes = useNavStyles();
  const { t } = useTranslation();

  return (
    <div>
      <nav className={classes.nav}>
        <NavLink to="/">{t('Home')}</NavLink>
        <NavLink to="welcome">{t('Welcome')}</NavLink>
        <NavLink to="search">{t('Search')}</NavLink>
      </nav>
      <Router>
        <Home path="/" />
        <Welcome path="/welcome" />
        <Search path="/search" />
      </Router>
    </div>
  );
}

type NavProps = RouteComponentProps & {
  to: string;
  children?: React.ReactNode;
};
function NavLink(props: NavProps): JSX.Element {
  const classes = useNavStyles();
  return (
    <Link
      className={classes.navLink}
      {...props}
      getProps={({ isCurrent }) => ({ active: isCurrent.toString() })}
    />
  );
}

function Copyright(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Box mt={2}>
      <Typography variant="body2" color="textSecondary" align="center">
        {t('OurRoots Copyright ©')}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

function Home(_props: RouteComponentProps): JSX.Element {
  const classes = useHomeStyles();
  const { t } = useTranslation();
  const code = '<code>src/*.tsx</code>';
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <p
          dangerouslySetInnerHTML={{
            __html: t('Instructions', { code, interpolation: { escapeValue: false } }),
          }}
        />
        <Button href="https://reactjs.org" target="_blank">
          {t('Learn')}
        </Button>
      </header>
    </div>
  );
}

function Welcome(_props: RouteComponentProps): JSX.Element {
  const classes = useWelcomeStyles();
  return (
    <div className={classes.welcome}>
      <Hello compiler="TypeScript" framework="React" />
      <SearchQuery />
      <Button variant="contained" onClick={() => navigate('/')} color="primary">
        Home
      </Button>
      <Copyright />
    </div>
  );
}

function Search(_props: RouteComponentProps): JSX.Element {
  const classes = useWelcomeStyles();
  return (
    <div className={classes.welcome}>
      <SearchForm />
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        color="primary"
        style={{ marginTop: 20 }}
      >
        Home
      </Button>
      <Copyright />
    </div>
  );
}

const useNavStyles = makeStyles({
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#f3f3f3',
  },
  navLink: {
    float: 'left',
    border: '1px solid darkgray',
    margin: 0,
    width: '90px',
    color: '#000',
    padding: '12px',
    backgroundColor: '#dddddd',
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#555',
      color: 'white',
    },
    '&[active="true"]': {
      backgroundColor: '#4caf50',
      color: 'white',
    },
  },
});

const useHomeStyles = makeStyles({
  app: {
    marginTop: '30px',
    textAlign: 'center',
    '& a': {
      color: '#61dafb',
    },
    '& code': {
      fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      fontWeight: 'bold',
      color: 'red',
    },
  },
  appLogo: {
    height: '40vmin',
    pointerEvents: 'none',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: '$spin infinite 20s linear',
    },
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
});

const useWelcomeStyles = makeStyles({
  welcome: {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
