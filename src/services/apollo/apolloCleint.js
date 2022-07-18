import {
  ApolloClient, ApolloLink, HttpLink, InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import _ from 'lodash';
import toastr from 'toastr';

const { localStorage } = global.window;

const cache = new InMemoryCache({ addTypename: false });
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const createClient = async (isUsingCache = false, isNotShowDisconnect = false) => {
  const {token} = localStorage;
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: 'Bearer ' +token,
      'Access-Control-Allow-Origin': "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"
      // 'access-token': token,
    },
  }));
  return new ApolloClient({
    link: authLink.concat(
      ApolloLink.from([
        onError(({
          graphQLErrors, networkError, response, operation, forward,
        }) => {
          if (graphQLErrors) {
            _.map(graphQLErrors, ({ message, extensions }) => {

              if (_.includes(message, '403') || _.includes(message, '400') || extensions.code === 'UNAUTHENTICATED') {
                toastr.warning(message, 'Request Failure', {
                  progressBar: false,
                  positionClass: 'toast-bottom-left',
                  preventDuplicates: true,
                })
              }
            });
          } else if (networkError) {
            console.log('networkError', networkError)
            toastr.warning("the server responded with a status of 404", 'Request Failure', {
              progressBar: false,
              positionClass: 'toast-bottom-left',
              preventDuplicates: true,
            })
          }
        }),
        new HttpLink({
          uri: 'http://172.16.0.89:3000/graphql',
          credentials: 'same-origin',
        }),
      ]),
    ),
    // *: name & version variables use for statistic purpose
    name: 'travel-blog',
    version: '1.0.0',
    cache,
    defaultOptions: isUsingCache ? undefined : defaultOptions,
  });
};

export default createClient;