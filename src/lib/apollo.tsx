import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8r9qfqq2rzi01uk62b0blpi/master",
  cache: new InMemoryCache(),
});
