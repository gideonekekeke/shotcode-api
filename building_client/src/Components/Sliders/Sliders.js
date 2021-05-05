import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(2) * 2,
  },
  margin: {
    height: theme.spacing(-1),

  },


}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;


  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


const location = [
  {
    value: 0,
    label: "Boundary"
  },
  {
    value: 25,
    label: "oregie"

  },
  {
    value: 50,
    label: "tolu"

  },
  {
    value: 75,
    label: "ojo road"

  },
  {
    value: 100,
    label: "wilmer"
  }
];

const Frontend = [
  {
    value: 0,
    label: "Angular"
  },
  {
    value: 25,
    label: "Django"

  },
  {
    value: 50,
    label: "Html"

  },
  {
    value: 75,
    label: "React js"

  },
  {
    value: 100,
    label: "Vue js"
  }
];

const Backend = [
  {
    value: 0,
    label: "GraphQl"
  },
  {
    value: 25,
    label: "Mysql"

  },
  {
    value: 50,
    label: "Nodejs"

  },
  {
    value: 75,
    label: "Php"

  },
  {
    value: 100,
    label: "SQlite"
  }
];




const PrettoSlider = withStyles({
  root: {
    color: "blue",
    height: 5,
    marginLeft: 30,





  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -5,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {
  },
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,

  },
  rail: {
    height: 8,
    borderRadius: 4,


  },
  // markLabel: {
  //   fontSize: "25px",
  //   fontWeight: "bold",
  //   textTransform: "capitalize"
  // }

})(Slider);




export default function CustomizedSlider() {
  const classes = useStyles();





  return (

    <center>
      <center style={{ width: "500px", height: "600px", fontFamily: "SanSerif", backgroundColor: "white", borderRadius: "12px" }}>
        <div>
          <form >
            <p style={{ fontWeight: "bold" }}>Name</p>
            <input
              style={{ height: "20px", width: "300px", borderRadius: "5px" }}
              type="text"
              placeholder="Enter your Name"

            />
            <p style={{ fontWeight: "bold" }}>Email Address</p>
            <input
              style={{ height: "20px", width: "300px", borderRadius: "5px" }}
              type="text"
              placeholder="Enter your Email"


            />
            {/* <p> <h1>Upload your image </h1></p>
            <input style={{ height: "50px", width: "200px", borderRadius: "5px" }}
              type="file" /> */}

          </form>
        </div>


        <div
          style={{ fontWeight: "bold" }}
          className={classes.root} >

          <div className={classes.margin} />
          <Typography gutterBottom
            style={{ fontWeight: "bold", marginTop: "8px" }}
          >Location</Typography>
          <PrettoSlider valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={0}
            step={25}

            marks={location}
          />
          <div
          // style={{ width: "600px" }}
          >

            <p
              style={{ fontWeight: "bold" }}
            >location: </p>
          </div>
        </div >

        <div
          // style={{ width: "600px" }} 
          className={classes.root}
          style={{ fontWeight: "bold" }}
        >

          <div className={classes.margin} />
          <Typography gutterBottom
            style={{ fontWeight: "bold" }}
          >Frontend stack</Typography>
          <PrettoSlider valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={0}
            step={25}
            marks={Frontend}
          />
          <div
          // style={{ width: "600px" }}
          >
            <p
            // style={{ fontSize: '30px' }}
            >Your frontend stack is:</p>

          </div>
        </div >

        <div
          // style={{ width: "600px" }}
          className={classes.root} >

          <div className={classes.margin} />
          <Typography gutterBottom
            style={{ fontWeight: "bold" }}
          >backend stack</Typography>
          <PrettoSlider valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={0}
            step={25}
            marks={Backend}
          />
          <div
          // style={{ width: "600px" }}
          >
            <p
              style={{ fontWeight: "bold" }}            >Your backend stack is:</p>

          </div>
        </div >

        <Button style={{ marginTop: "20px", color: "black", fontWeight: "bold", height: "50px", width: "200px", backgroundColor: "#ffb400", border: 'none' }}
          variant="outlined" color="secondary">
          Submit
        </Button>
      </center>
    </center >
  );
}
