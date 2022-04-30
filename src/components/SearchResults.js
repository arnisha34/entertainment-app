import React, { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { MdLocalMovies, MdTv } from 'react-icons/md'
import styled from 'styled-components'
import { Context } from './Context'

export default function SearchResults() {

    const ctx = useContext(Context)

    return (
      <SearchResultsContainer>
        {ctx.searchResults.map((item, id) => {
          return (
            <SearchResultsItems key={id} className="results">
							<Image>
								<PlayContainer className='play-container' onClick={() => ctx.setCloseModal(!ctx.closeModal)}>
										<PlayButton onClick={() => ctx.handleVideoClick(item.id)}><AiFillPlayCircle size={30}/> <span>Play</span></PlayButton>
								</PlayContainer>
								<img src={item.image} alt={item.name}/>
								<BookMark className={item.isBookmarked&&"bookmarked"} onClick={() => ctx.handleClick(item.id)}>{!item.isBookmarked ? <BsBookmark /> : <BsBookmarkFill />}</BookMark>
							</Image>
              <InfoContainer>
                <Info>
                  <div className='info-top'>
                    <div className='year'>{item.year}</div>
                    <div className='category'>{item.category === "Movie" ? <><MdLocalMovies /> {item.category}</> : item.category === "TV Series" ? <><MdTv /> {item.category}</> : null}</div>
                    <div className='rating'>{item.rating}</div>
                  </div>
                  <div className='info-bottom'>
                    <h4 className='title'>{item.title}</h4>
                  </div>
                </Info>
              </InfoContainer>
            </SearchResultsItems>
					)
      })} 
      </SearchResultsContainer>
    ) 
  }
  
const SearchResultsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 1rem;
`
const SearchResultsItems = styled.div`
	position: relative;
`
const Image = styled.div`
	&:hover .play-container{
		display: block;
	}
	
	&:hover::after{
		content: "";
		background-color: rgba(0,0,0,0.2);
		border: none;
		border-radius: 8px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 170px;
	}

	img{
		border-radius: 8px;
		object-fit: cover;
		width: 100%;
		height: 170px;
	}
`
const PlayContainer = styled.div`
	display: none;
  position: absolute;
  top: 35%;
  left: 45%;
  transform: translate(-35%, -45%);
  z-index: 1;
`
const PlayButton = styled.div`
  background: rgba(255,255,255, 0.5);
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;

  span{
    font-size: 1.15rem;
  }

	:hover{
    cursor: pointer;
  }
`
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const BookMark = styled.div`
	background: rgba(90,105,143,.7);
	border-radius: 50%;
	width: 15px;
	height: 15px;
	padding: 10px;
	position: absolute;
	top: 0;
	right: 0;
	margin: 10px 15px;
	z-index: 1;

	:hover{
		background: var(--dark-blue);
		cursor: pointer;
	}

	&.bookmarked{
		background-color: var(--dark-blue);
	}
`
const Info = styled.div`
	padding: 0 0 20px;
	.info-top{
		font-size: 1rem;
		font-weight: 300;
		margin-bottom: 5px;
		opacity: .75;
		width: fit-content;
	}

	.info-top > div{
		display: inline-flex;
		align-items: center;
		font-size: 0.875rem;
		gap: 6px;
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

	h4{
		margin: 0;
	}
`
  