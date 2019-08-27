import React from 'react'
import { Container, HighlightedRoute, SignUpButton } from './styles'

const routeInfo = [
  { name: 'Home', path: '/' },
  { name: 'How it Works', path: '/info' },
  { name: 'Testimonials', path: '/testimonials' }
]

const Routes = routeInfo.map(route => (
  <HighlightedRoute key={route} to={route.path}>
    {route.name}
  </HighlightedRoute>
))

const RoutesRow = () => (
  <Container>
    {Routes}
    <SignUpButton to="/sign-in">Sign In</SignUpButton>
  </Container>
)

export default RoutesRow
