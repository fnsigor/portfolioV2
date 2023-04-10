import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


export async function getAllProjects() {


  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
         {
            user(login: "fnsigor") {
              pinnedItems(first: 15) {
                edges {
                  node {
                    ... on Repository {
                      nameWithOwner
                      description
                      url
                      homepageUrl
                      openGraphImageUrl
                      name
                    }
                  }
                }
              }
            }
          }`
  })

  const { user } = data
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node)


  return {
    pinnedItems
  }

}


