import React from 'react'
import styled from 'styled-components'
import Recommended from './Recommended'
import SearchResults from './SearchResults'
import Trending from './Trending'
import { Context } from './Context'
import { useContext } from 'react'

export default function Home() {

  const ctx = useContext(Context);

  return (
    <Container>
      {ctx.isActive === true ?
      <>
        <h1>Found {ctx.searchResults.length} results for '{ctx.searchTitle}'</h1>
        <SearchResults />
      </> :
      <>
      <h1>Trending</h1>
        <TrendingItems className='trending'>
            <Trending />
        </TrendingItems>
      <h1>Recommended for you</h1>
      <RecommendedItems className='recommended'>
          <Recommended />
      </RecommendedItems>
      </>}
    </Container>
  )
}

const Container = styled.div`
`
const TrendingItems = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
`
const RecommendedItems = styled.div`
`