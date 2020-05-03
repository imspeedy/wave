import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import study from "../../dummy_data/images/2.png";
import engineer from "../../dummy_data/images/1.png";
import aeroplane from "../../dummy_data/images/3.png";
import management from "../../dummy_data/images/7.png";
import ecommerce from "../../dummy_data/images/4.png";
import animation from "../../dummy_data/images/total/6.png";
import doctor from "../../dummy_data/images/total/7.png";

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

export default function SimpleCard1() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper elevation={10} style={{marginBottom:'4%'}}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
        <img src={study} style={{width:'132%'}} />
        
        </Grid>
        <Grid item xs={1} style={{ display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
       
        <Typography style={{fontSize:'30px',fontWeight:'500',marginLeft:'-25px'}}>Academics</Typography>
        </Grid>
        <Grid item xs={3} >
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={engineer} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>ENGINEERING</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={aeroplane} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>AVIATION</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={management} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>MANAGEMENT</Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={ecommerce} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>E-COMMERCE</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={animation} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>ANIMATION</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={doctor} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>DOCTRATE</Typography>
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