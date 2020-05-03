import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import music from "../../dummy_data/images/total/10.png";
import singing from "../../dummy_data/images/total/11.png";
import dancing from "../../dummy_data/images/total/12.png";
import instruments from "../../dummy_data/images/total/13.png";


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

export default function SimpleCard2() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper elevation={10} style={{marginBottom:'4%'}}>
      <Grid container spacing={3}>
        
      <Grid item xs={3} >
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography style={{fontSize:'15px'}}>SINGING</Typography>
          <img src={singing} style={{width:'45%'}} />

          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography style={{fontSize:'15px'}}>DANCING</Typography>
          <img src={dancing} style={{width:'45%'}} />

          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography style={{fontSize:'15px'}}>INSTRUMENTS</Typography>
          <img src={instruments} style={{width:'45%'}} />

          </div>
        </Grid>
        <Grid item xs={2} style={{ display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <Button variant="contained" color="primary">
      Explore More
      </Button>
        </Grid>
       
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={1} style={{ display: 'flex',justifyContent: 'center'}}>
        <Typography style={{fontSize:'30px',fontWeight:'500',marginLeft:'0px'}}>MUSIC</Typography>
        </Grid>
       
        <Grid item xs={4}>
        <img src={music} style={{width:'100%'}} />

        </Grid>
      </Grid>
      </Paper>
  );
}