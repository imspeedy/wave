import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import football from "../../dummy_data/images/total/14.png";
import sports from "../../dummy_data/images/total/16.png";
import martial from "../../dummy_data/images/total/15.png";
import fitness from "../../dummy_data/images/total/17.png";


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

export default function SimpleCard3() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper elevation={10} style={{marginBottom:'4%'}}>
      <Grid container spacing={3}>
      <Grid item xs={4}>
        <img src={football} style={{width:'100%'}} />

        </Grid>
        <Grid item xs={2} style={{ display: 'flex',justifyContent: 'center'}}>
        <Typography style={{fontSize:'30px',fontWeight:'500',marginLeft:'-103px'}}>SPORTS AND FITNESS</Typography>
        </Grid>
      <Grid item xs={3} >
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography style={{fontSize:'15px'}}>MARTIAL ARTS</Typography>
          <img src={martial} style={{width:'45%'}} />

          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography style={{fontSize:'15px'}}>SPORTS</Typography>
          <img src={sports} style={{width:'45%'}} />

          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography style={{fontSize:'15px'}}>FITNESS</Typography>
          <img src={fitness} style={{width:'45%'}} />

          </div>
        </Grid>
        <Grid item xs={2} style={{ display: 'flex',justifyContent: 'center',alignItems: 'flex-end'}}>
        <Button variant="contained" color="primary">
      Explore More
      </Button>
        </Grid>
       
       
       
       
      
      </Grid>
      </Paper>
  );
}