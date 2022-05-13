import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'

import { createClient, dedupExchange, fetchExchange, Provider } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

import { ConninfoDocument } from '../generated/graphql'

const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: "include",
  },
  // exchanges: [
  //   dedupExchange, 
  //   cacheExchange({
  //     updates: {
  //       Mutation: {
  //         login: (result, args, cache, info) => {
  //           cache.updateQuery({ query: ConninfoDocument }) => {
  //             data.value
  //           });
  //         },
  //       },
  //       Subscription: {
  //         subscriptionField: (result, args, cache, info) => {
  //           // ...
  //         },
  //       },
  //     },
  //   }), 
  //   fetchExchange
  // ],
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
