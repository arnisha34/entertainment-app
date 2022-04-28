import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CgCloseO } from 'react-icons/cg'
import Bookmarked from './components/Bookmarked'
import Home from './components/Home'
import Login from './components/Login'
import Modal from './components/Modal'
import Movies from './components/Movies'
import Search from './components/Search'
import SideNav from "./components/SideNav"
import Signup from './components/Signup'
import TV from './components/TV'
import { data } from './components/Data'
import { Context } from "./components/Context"
import styled from 'styled-components'

import { auth } from './utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {

  const [closeModal, setCloseModal] = useState("close")
  const [currentUser, setCurrentUser] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [isCurrentPage, setIsCurrentPage] = useState("home")
  const [isRecommended, setIsRecommended] = ([])
  const [results, setResults] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchTitle, setSearchTitle] = useState("")
  const [videoURL, setVideoURL] = useState("")

  useEffect(() => {
    setResults(data)
    setSearchResults(data)
    const stopAuth = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return stopAuth
  },[])

  const handleClick = (id) => {
    const resultsBookmarked = results.map(item => item.id === id ? {...item, isBookmarked: !item.isBookmarked} : item)

    const searchResultsBookmarked = searchResults.map(item => item.id === id ? {...item, isBookmarked: !item.isBookmarked} : item)

    setResults(resultsBookmarked)
    setSearchResults(searchResultsBookmarked)
  }

  const handleVideoClick = (id) => {
    const mediaID = results.filter(item => item.id === id).map(item => item.video)
    setVideoURL(mediaID)
  }

  return (
    <Context.Provider value={{closeModal, setCloseModal, currentUser, isActive, setIsActive, isCurrentPage, setIsCurrentPage, isRecommended, setIsRecommended, results, setResults, searchResults, searchTitle, setSearchTitle, setSearchResults, videoURL, setVideoURL, handleClick, handleVideoClick}}>
      <div className="App">
        <div id="sideNav">
            <SideNav />
        </div>
        <div id="main-content">
          <Search />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/movies' element={<Movies />}/>
            <Route path='/tv' element={<TV />}/>
            <Route path='/bookmarks' element={<Bookmarked />}/>
            <Route path='/login' element={<Login auth={auth}/>}/>
            <Route path='/signup' element={<Signup auth={auth}/>}/>
          </Routes>
        </div>
      </div>
      <ModalContainer className={closeModal ? "close" : "open"}>
        <CloseButton className='closeBtn' onClick={() => setCloseModal(!closeModal)}><CgCloseO/></CloseButton>

        <Modal />
      </ModalContainer>
    </Context.Provider>  
  );
}

const ModalContainer = styled.div`
  position: absolute;
`

const CloseButton = styled.div`
  margin-bottom: 20px;
  position: absolute;
  top: 20px;
  right: 20px;

  svg{
    color: #fff;
    font-size: 50px;
  }

  svg:hover{
    color: var(--tomato);
    cursor: pointer;
  }
`

export default App;
