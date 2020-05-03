import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/footer/Footer";
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import swim from '../dummy_data/images/swim.jpg';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Listing() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
          <NavBar/>
          <Container style={{paddingTop:'6%'}}>
          <Grid container spacing={3}>
        <Grid item xs={3}>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={6}>
          <Card className={classes.root}>
      <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={4}>
        <img src={swim} style={{width:'100%'}} />
          </Grid>
          <Grid item xs={8}>
          <Grid container spacing={3}>
        <Grid item xs={10}>
        <Typography variant="h5" component="h2">
         Fitso sel swimming academy
        </Typography>
          </Grid>
          <Grid item xs={2}>
          <Badge color="secondary" badgeContent={3.2} showZero />
          <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize:'9px'}}>
         2 Reviews
        </Typography>
          </Grid>
          </Grid>
         
          </Grid>
          </Grid>
     

      </CardContent>
     
    </Card>
          </Grid>
          <Grid item xs={3}>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          </Grid>
          </Grid>
   
    </Container>
    <Footer/>
    </div>
  );
}
