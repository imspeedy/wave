import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import arts from "../../dummy_data/images/total/18.png";
import painting from "../../dummy_data/images/total/19.png";
import acting from "../../dummy_data/images/total/20.png";
import fashion from "../../dummy_data/images/total/21.png";
import tailoring from "../../dummy_data/images/total/22.png";
import film from "../../dummy_data/images/total/23.png";

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

export default function SimpleCard4() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper elevation={10} style={{marginBottom:'4%'}}>
      <Grid container spacing={3}>
      <Grid item xs={3} >
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={painting} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>PAINTING</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={acting} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>ACTING</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={fashion} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>FASHION DESIGNING</Typography>
          </div>
        </Grid>
        <Grid item xs={3} >
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={tailoring} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>TAILORING</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={film} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>FILM PRODUCTION</Typography>
          </div>
          <div style={{display:'flex',alignItems:'flex-end',marginTop:'8%'}}>
          <Button variant="contained" color="primary">
      Explore More
      </Button>
          </div>
        </Grid>
        <Grid item xs={2} style={{ display: 'flex',justifyContent: 'center'}}>
        </Grid>
      <Grid item xs={4}>
      <Typography style={{fontSize:'30px',fontWeight:'500', display: 'flex',justifyContent: 'center'}}>AR<span style={{color:"#f50057"}}>TS</span></Typography>
        <img src={arts} style={{width:'76%'}} />

        </Grid>
       
       
        
       
       
       
       
      
      </Grid>
      </Paper>
  );
}