import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'

import { createClient, dedupExchange, fetchExchange, Provider } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { gql } from '@urql/core';

import { ConninfoDocument } from '../generated/graphql'

const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [
    dedupExchange, 
    cacheExchange({
      updates: {
        Mutation: {
          mutationField: (result, args, cache, info) => {
            // ...
            const fragment = gql`
              fragment _ on User {
                username
                password
              }
            `;
            cache.writeFragment(fragment, { username: args.username, password: args.password })
          },
        },
        Subscription: {
          subscriptionField: (result, args, cache, info) => {
            // ...
          },
        },
      },
    }), 
    fetchExchange
  ],
  
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
