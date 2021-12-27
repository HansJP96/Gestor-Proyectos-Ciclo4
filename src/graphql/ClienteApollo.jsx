import { setContext } from '@apollo/client/link/context'
import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'
})

const authLink = setContext((_, { headers }) => {
    let token = JSON.parse(localStorage.getItem('Token'))
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
})

const ClienteApollo = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
})

export default ClienteApollo
