import React, { useContext } from 'react'
import { Context } from './Context';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'

export default function Search() {

  const ctx = useContext(Context)

  const handleChange = (e) => {
    e.preventDefault();
    if(e.target.value === ""){
      ctx.setSearchResults(ctx.results);
      ctx.setIsActive(false)
    }else{
      const filteredSearchResults = ctx.searchResults.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
      ctx.setSearchResults(filteredSearchResults)
      ctx.setIsActive(true)
      ctx.setSearchTitle(e.target.value)
    }
  }

  return (
    <>
    {(ctx.isCurrentPage !== "login") ?
      <SearchContainer className='search-container'>
          <SearchBar>
            <FiSearch size={28}/> <input name="search" placeholder='Search for movies or TV series' onChange={handleChange}/>
          </SearchBar>
      </SearchContainer> : <div></div>}
    </>
  )
}

const SearchContainer = styled.div`
    margin: 55px 0 30px;
`
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  input{
      border: none;
      background: transparent;
      color: #fff;
      font-size: 25px;
      width: calc(100% - 96px);
      :focus{
        border-bottom: 2px solid var(--grayish-blue);
        outline: none;
      }
  }
`
