import React, { useState, useEffect } from 'react';
import { Link as link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CssBaseline, CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import Link from '@material-ui/core/Link';
import queryString from 'query-string';
import axios from 'axios';
import './Homepage.css';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="www.gauravpandey.me">
        Gaurav Pandey
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,

    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: 'auto', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  heading: {
    fontWeight: '500',
    fontSize: '5rem',
    fontFamily: 'Monospace'
  },
}));



export default function Album({ location }) {
  const classes = useStyles();

  const [page, setPage] = useState('');
  const [contacts, setContacts] = useState([]);
  const [info, setInfo] = useState('');
  const [initializer, setInitialzer] = useState(false);




  useEffect(() => {
    const { page } = queryString.parse(location.search);
    setPage(page);

    if (page === "Breaking Bad") {
      setInfo("Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes.")
    }
    else {
      setInfo("Better Call Saul is an American television crime drama series created by Vince Gilligan and Peter Gould. It is a prequel, spin-off of Gilligan's previous series Breaking Bad. Set in the early to mid 2000s in Albuquerque, New Mexico, the series follows the development of Jimmy McGill, a Chicago area con-man into Juarez cartel affiliated, criminal defense attorney Saul Goodman.")
    }

    axios.get(`https://www.breakingbadapi.com/api/characters?category=${page}`)
      .then(res => {
        const resdata = res.data;
        setContacts(resdata)
        if (Object.keys(resdata).length > 0) {
          setInitialzer(true)
        }

      })
      .catch(console.log)

  }, [location.search]);




  return initializer !== false ? (
    <React.Fragment>
      <div>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PermIdentityIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Informatica
          </Typography>
          </Toolbar>
        </AppBar>
        <main className="main_block">
          <div className={classes.heroContent}>
            <Container maxWidth="sm" >
              <Typography component="h1" variant="h2" align="center" className={classes.heading} color="textPrimary" gutterBottom>
                {page}
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {info}
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" component={link} to="/">
                      Back to Selection Screen
                  </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" href="https://github.com/GauravPandey1898/BreakingSaul">
                      Source Code For This Site
                  </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {contacts.map((contact) => (
                <Grid item key={contact} xs={12} sm={6} md={4}>



                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      component="img"

                      image={contact.img}
                      title="this"
                    >
                    </CardMedia>

                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {contact.name}
                      </Typography>
                      <div className="overlay">

                        <div className="information">
                          <Typography style={{ fontWeight: '300' }}>
                            {contact.occupation + " "}
                          </Typography>

                          <Typography>
                            Potrayed By {contact.portrayed}
                          </Typography>
                          <Typography style={{ color: 'black', text: 'bold', fontWeight: '300' }}>
                            Nickname in Series {contact.nickname}
                          </Typography>

                        </div>

                      </div>

                    </CardContent>


                  </Card>

                </Grid>



              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Did You Loved It
        </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            This Website Was a Fun Project Inspired by the
            <Link href="https://www.youtube.com/user/TechGuyWeb"> TechGuyWeb </Link>
          </Typography>
          <Copyright />
        </footer>
      </div>
    </React.Fragment>
  ) : <div id="loader">
      <CircularProgress />
    </div>
}