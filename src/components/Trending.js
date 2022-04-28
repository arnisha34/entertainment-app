import React, { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { MdLocalMovies, MdTv } from 'react-icons/md'
import styled from 'styled-components'
import { Context } from './Context'


export default function Trending() {

  const ctx = useContext(Context)

  const isTrending = ctx.results.filter(item => item.isTrending ? item : null)

  return (
    <TrendingContainer>
      {isTrending.map((item, id) => {
        return (
          <TrendingItem key={id}>
            <Image>
              <img src={item.images.medium} alt={item.name}/>
            </Image>
            <InfoContainer>
              <PlayContainer className='play-container' onClick={() => ctx.setCloseModal(!ctx.closeModal)}>
                <PlayButton onClick={() => ctx.handleVideoClick(item.id)}><AiFillPlayCircle size={30}/> <span>Play</span></PlayButton>
              </PlayContainer>
              <BookMark className={item.isBookmarked&&"bookmarked"} onClick={() => ctx.handleClick(item.id)}>{!item.isBookmarked ? <BsBookmark /> : <BsBookmarkFill />}</BookMark>
              <Info>
                <div className='info-top'>
                  <div className='year'>{item.year}</div>
                  <div className='category'>{item.category === "Movie" ? <><MdLocalMovies /> {item.category}</> : item.category === "TV Series" ? <><MdTv /> {item.category}</> : null}</div>
                  <div className='rating'>{item.rating}</div>
                </div>
                <div className='info-bottom'>
                  <h2 className='title'>{item.title}</h2>
                </div>
              </Info>
            </InfoContainer>
          </TrendingItem>
        )
    })} 
    </TrendingContainer>
  ) 
}

const TrendingContainer = styled.div`
  display: inline-flex;
  gap: 50px;
  padding: 0 30px 30px 0;
  position: relative;
`
const TrendingItem = styled.div`
  position: relative;
  width: 470px;
  height: 230px;
  `
  const Image = styled.div`
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    position: absolute;
  }

  `
  const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 1;
  
  :hover{
    background-color: rgba(0,0,0,0.4);
  }

  &:hover .play-container{
    display: block;
  }
`
const PlayContainer = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const PlayButton = styled.div`
  background: rgba(255,255,255, 0.4);
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;

  span{
    font-size: 1.25rem;
  }

  :hover{
    cursor: pointer;
  }
`
const BookMark = styled.div`
  align-self: flex-end;
  background: rgba(90,105,143,.7);
  border-radius: 50%;
  width: 15px;
  height: 15px;
  padding: 10px;
  margin: 10px 15px;

  :hover{
    background: var(--dark-blue);
    cursor: pointer;
  }

  &.bookmarked{
		background-color: var(--dark-blue);
	}
`
const Info = styled.div`
  padding: 0 0 20px 20px;
  .info-top{
    gap: 10px;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 5px;
    opacity: .75;
    position: relative;
    width: fit-content;
  }

  .info-top > div{
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-weight: 200;
    padding-right: 10px;
    &::before{
      background-color: #fff;
      border-radius: 50%;
      content: "";
      opacity: .75;
      width: 3px;
      height: 3px;
    }
    &:first-child::before{
      background-color: transparent;
      width: 0;
      margin-left: -5px;
    }
  }

  h2{
    margin: 0;
  }
`
