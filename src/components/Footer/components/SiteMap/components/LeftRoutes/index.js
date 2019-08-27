import React from 'react'
import { Container, Route } from './styles'

const leftRouteInfo = [
  { name: 'Home', path: '/' },
  { name: 'How it Works', path: '/info' },
  { name: 'FAQ', path: '/faq' }
]

const Routes = leftRouteInfo.map(route => (
  <Route key={route.name} to={route.path}>
    {route.name}
  </Route>
))

const LeftRoutes = () => {
  return <Container>{Routes}</Container>
}

export default LeftRoutes
