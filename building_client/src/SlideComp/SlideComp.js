import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import './slide.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
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


const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const location = [
  {
    value: 0,
    label: 'Boundary'
  },
  {
    value: 25,
    label: 'Orege'
  },
  {
    value: 50,
    label: 'Ojo Road'
  },
  {
    value: 75,
    label: 'Tolu'
  },
  {
    value: 100,
    label: 'Wilmer'
  },
];

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
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
})(Slider);




export default function CustomizedSlider() {
  const [locate, setLocate] = useState('')

  const handleChange = (e, newlocate) => {
    setLocate(newlocate)
  }

  const classes = useStyles();

  return (
    <center>
      <div className='begins'>
        WELCOME TO AJEGUNLE HECKERTOR
      </div>
      <div style={{ width: '600px', marginTop: '200px' }} className={classes.root}>

        <Typography gutterBottom>What part of Ajegunle do you reside</Typography>
        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} marks={location}
          step={25} onChange={handleChange} />

        <div >
          <p
            style={{ marginTop: '50px' }}>your Location is : {locate === 0 ? "Boundary" :
              locate === 25 ? 'orege' : locate === 50 ? 'ojo Road' : locate === 75 ? 'Tolu' : locate === 100 ? 'Wilmer' : 'badagry'}</p>



          <hr />
        </div>
        <div style={{ marginTop: '60px' }}>

        </div>

        <p></p>

      </div>
    </center >
  );
}
