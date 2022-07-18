import React, { Fragment, useEffect } from 'react';
import { RouteMain } from './routes';
import { BrowserRouter as Router, Route, Routes as Switch, Navigate, useNavigate } from "react-router-dom";
import LoginScreen from 'modules/login';
import HomePage from 'modules/home';
import { useSelector } from 'react-redux';

const MainRouter = ({
  authenticated
}) => {
  const navigation = useNavigate();
  const logined = useSelector(state => state.app?.auth?.token);
  useEffect(() => {
    if(authenticated || logined) {
      navigation('/home');
    }else {
      navigation('/login');
    }
  }, [authenticated, logined ])

  return (
    <Switch>
      <Route
        path='/login'
        element={<LoginScreen />}
      />

      {
        logined || authenticated? RouteMain.map((item, index) => {
          return (
            <Route
              path={item.path}
              key={index + item.nameScreen}
              element={item.element}
            />
          )
        }) : null
      }
      <Route
        path='/'
        element={<Navigate replace to={authenticated ? "/home" : "/login"} />}
      />
    </Switch>

  )
}

export default MainRouter;