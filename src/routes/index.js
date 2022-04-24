import { useTheme } from '@material-ui/core';
import LoginScreen from 'modules/login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import { RouteMain } from './routes';
import themedStyle from './styles';



function AppRoot () {
  
  const classes = themedStyle();
  const theme = useTheme();
  

  return (
    <Router basename=''>
      <Switch>
        <Route
          path='/'
          element={<LoginScreen />}
        />
        {
          RouteMain.map((item, index) => {
            return (
              <Route 
                path={item.path}
                key={index+ item.nameScreen}
                element={item.element}
              />
            )
          })
        }
      </Switch>
    </Router>
  )

}

export default AppRoot;