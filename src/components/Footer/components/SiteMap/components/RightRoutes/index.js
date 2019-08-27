import React from 'react'
import { Container, Route } from './styles'

const rightRouteInfo = [
  { name: 'Reviews', path: '/testimonials' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Work with Us', path: '/work-with-us' }
]

const Routes = rightRouteInfo.map(route => (
  <Route key={route.name} to={route.path}>
    {route.name}
  </Route>
))

const RightRoutes = () => {
  return <Container>{Routes}</Container>
}

export default RightRoutes
