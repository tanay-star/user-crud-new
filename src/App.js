import React from 'react'
import logo from './logo.svg'
import './App.css'
//importing components
import SideMenu from './components/SideMenu'
import Header from './components/Header'
//importing makeStyles from material-ui
import { makeStyles, CssBaseline } from '@material-ui/core'

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '800px',
    width: '100%',
  },
})

const App = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <SideMenu />
      <div className={classes.appMain}></div>
      <Header />
      <CssBaseline />
    </React.Fragment>
  )
}

export default App
