
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { getStaticProps } from '../apolloConfig';


export function Home() {

  const [pinnedItems, setPinnedItems] = useState([])


  useEffect(() => {
    getStaticProps().then(response => {
      console.log(response.pinnedItems)
      setPinnedItems(response.pinnedItems)
    })
  }, [])

  return (
    <div className="App">
      <h1>Tentativa sem next js</h1>
      <button>Mostrar dados da api</button>

      <ul>
        {
          pinnedItems.map(repository => <li key={repository.nameWithOwner}>{repository.nameWithOwner}</li>)
        }
      </ul>

    </div>
  )
}

