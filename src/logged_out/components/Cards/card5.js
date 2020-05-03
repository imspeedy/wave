import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import beauty from "../../dummy_data/images/total/24.png";
import makeup from "../../dummy_data/images/total/26.png";
import hairstyling from "../../dummy_data/images/total/25.png";
import fashion from "../../dummy_data/images/total/21.png";
import tailoring from "../../dummy_data/images/total/22.png";
import nail from "../../dummy_data/images/total/27.png";

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

export default function SimpleCard5() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper elevation={10} style={{marginBottom:'4%'}}>
      <Grid container spacing={3}>
      <Grid item xs={4}>
      <img src={beauty} style={{width:'76%'}} />
      <Typography style={{fontSize:'30px',fontWeight:'500', display: 'flex',justifyContent: 'center',marginRight:'39%'}}><span style={{color:"#f50057"}}>BEAUTY</span></Typography>
        

        </Grid>
      <Grid item xs={3} >
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={makeup} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>MAKE UP</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={hairstyling} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>HAIR STYLING</Typography>
          </div>
         
        </Grid>
        <Grid item xs={3} >
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={tailoring} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>MASSAGE</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
          <img src={nail} style={{width:'45%'}} />
          <Typography style={{fontSize:'15px'}}>NAIL ART</Typography>
          </div>
          <div style={{display:'flex',alignItems:'flex-end',marginTop:'8%'}}>
          <Button variant="contained" color="primary">
      Explore More
      </Button>
          </div>
        </Grid>
        <Grid item xs={2} style={{ display: 'flex',justifyContent: 'center'}}>
        </Grid>
    
       
       
        
       
       
       
       
      
      </Grid>
      </Paper>
  );
}