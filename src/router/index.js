import Login from '../views/login/Login'
import Frame from '../views/backstage/Frame'
import {Redirect} from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/login'></Redirect>
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/frame',
    component: Frame
  }
]

export default routes