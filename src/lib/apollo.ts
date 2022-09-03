import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.hygraph.com/v2/cl4pafqr71v2801xl8yq82eeg/master',
  cache: new InMemoryCache()
})
