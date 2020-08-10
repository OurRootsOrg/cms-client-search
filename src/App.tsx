import { makeStyles } from '@material-ui/core/styles';
import { Link, RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SearchPage from './components/SearchPage';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function App(): JSX.Element {
  const classes = useNavStyles();
  const { t } = useTranslation();

  return (
    <div>
      <nav className={classes.nav}>
        <NavLink to="/">{t('Home')}</NavLink>
      </nav>
      <Router>
        <Home path="/" />
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

function Home(_props: RouteComponentProps): JSX.Element {
  const classes = useHomeStyles();
  return (
    <div className={classes.welcome}>
      <SearchPage />
      {/* <Button
        variant="contained"
        onClick={() => navigate('/')}
        color="primary"
        style={{ marginTop: 50 }}
      >
        Home
      </Button> */}
      <Copyright />
    </div>
  );
}

function Copyright(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Box m={5}>
      <Typography variant="body2" color="textSecondary" align="center">
        {t('OurRoots Copyright ©')}
        {new Date().getFullYear()}
      </Typography>
    </Box>
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
  welcome: {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
