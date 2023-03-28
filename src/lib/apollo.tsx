import { ApolloClient, InMemoryCache, ApolloLink, split } from "@apollo/client";
import { HttpLink } from "@apollo/client";

const httpLink1 = new HttpLink({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8r9qfqq2rzi01uk62b0blpi/master",
});

const httpLink2 = new HttpLink({
  uri: "https://api-sa-east-1.hygraph.com/v2/clfr3piv40qw501uo40u7ej5q/master",
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
    },
  }));

  return forward(operation);
});

const link = ApolloLink.from([authLink, ApolloLink.split(
  (operation) => operation.getContext().clientName === "client1" || operation.getContext().clientName === "client2",
  ApolloLink.concat(httpLink1, httpLink2),
  ApolloLink.concat(httpLink2, httpLink1)
)]);


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
