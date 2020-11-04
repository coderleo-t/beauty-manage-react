import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './router/index'
import './index.css'
import 'antd/dist/antd.less'


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </BrowserRouter>
    </div>
  )
}