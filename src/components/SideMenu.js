import React from 'react'
//importing makeStyles from material-ui
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '250px',
    height: '100%',
    backgroundColor: '#253053',
  },
})

const SideMenu = () => {
  const classes = useStyles()

  return <div className={classes.sideMenu}></div>
}

export default SideMenu
