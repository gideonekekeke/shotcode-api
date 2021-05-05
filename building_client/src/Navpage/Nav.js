import React, { useState } from 'react'
import Menubar from '../Menubar/Menubar'
import SearchAppBar from '../Searchbar/Searchbar'
import './nav.css'
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black'
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),


    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'



  },
  inputRoot: {
    color: 'white',

  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '200px',
    [theme.breakpoints.up('sm')]: {
      width: '14ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));




function Nav() {
  const classes = useStyles();

  const [show, setShow] = useState(false)
  const clickEffect = () => {
    setShow(!show)

  }

  return (
    <>
      <div className='nav_container'>
        <div className='nav_holder'>
          <div className='logo'> LOGO
        </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div className='links'>
            <a>HOME</a>

            <a>RESULTS</a>

          </div>
          <div className='mobile_screen'>

            {/* <button onClick={clickEffect}> Menu</button> */}

          </div>

        </div>

        <div className='mobile_screen'>
          <SearchAppBar />
        </div>


      </div>


      <Menubar show={show} setShow={setShow} />

    </>
  )
}

export default Nav
