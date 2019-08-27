import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import config from './config'

const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: config.graphqlUrl,
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
})

export default client
