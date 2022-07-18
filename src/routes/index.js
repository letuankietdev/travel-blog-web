import { useTheme } from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes as Switch, Navigate, useNavigate, Routes } from "react-router-dom";
import MainRouter from './MainRouter';



function AppRoot () {
  const [authented, setAuthented] = useState(null)
  
  const isAuthenticated = useMemo(() => {
    setAuthented(window?.localStorage?.token || false)
    return window?.localStorage?.token || false
  }, [window?.localStorage?.token])
  return (
    <Router basename=''>
      <MainRouter authenticated ={isAuthenticated || authented}/>
    </Router>
  )

}

export default AppRoot;