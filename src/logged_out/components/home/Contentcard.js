import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import SimpleCard1 from "./../Cards/card1"
import SimpleCard2 from "./../Cards/card2"
import SimpleCard3 from "./../Cards/card3"
import SimpleCard4 from "./../Cards/card4"
import SimpleCard5 from "./../Cards/card5"



function ContentSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Features
        </Typography>
        <div className="container-fluid">
         <SimpleCard1 />
         <SimpleCard2/>
         <SimpleCard3/>
         <SimpleCard4/>
         <SimpleCard5/>
        </div>
      </div>
    </div>
  );
}


export default withWidth()(ContentSection);
