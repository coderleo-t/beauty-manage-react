import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './router/index'
import './index.css'
import 'antd/dist/antd.less'


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </BrowserRouter>
    </div>
  )
}