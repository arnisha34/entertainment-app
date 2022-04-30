import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { BsBookmarkFill } from 'react-icons/bs'
import { MdTv } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { Context } from './Context'
import styled from 'styled-components'

export default function SideNav({auth}) {

	const ctx = useContext(Context)

	const handleLogout = () => {
		signOut(auth)
		.then(() => {
				ctx.setCurrentUser([])
				window.location="/login"
		}).catch((err) => {
				alert(err.message)
		})
	}


	return (
		ctx.isCurrentPage !== "login" ?
		<SideNavContainer>
			<Logo to="/" className={`${ctx.isCurrentPage === "home" ? "active" : ""}`} onClick={() => ctx.setIsCurrentPage("home")}><img src='./images/logo.svg' alt="logo"/></Logo>
			<NavItems className='nav-items'>
				<Home to="/" className={`${ctx.isCurrentPage === "home" ? "active" : ""}`} onClick={() => ctx.setIsCurrentPage("home")}><img src='./images/home-nav.svg' alt="logo"/></Home>
				<Movies to="/movies" className={`${ctx.isCurrentPage === "movies" ? "active" : ""}`} onClick={() => ctx.setIsCurrentPage("movies")}><img src='./images/movies-nav.svg' alt="movies"/></Movies>
				<Television to="/tv" className={`${ctx.isCurrentPage === "tv" ? "active" : ""}`} onClick={() => ctx.setIsCurrentPage("tv")}><MdTv size={25}/></Television>
				<Bookmarks to="/bookmarks" className={`${ctx.isCurrentPage === "bookmarks" ? "active" : ""}`} onClick={() => ctx.setIsCurrentPage("bookmarks")}><BsBookmarkFill size={20}/></Bookmarks>
			</NavItems>
			<PopoverMenu className='logout'>
				<Logout to="/login" onClick={handleLogout}><span>Logout</span></Logout>
			</PopoverMenu>
			<Login to="/login" className={`${ctx.isCurrentPage === "login" ? "active" : ""}`} onClick={() => ctx.setIsCurrentPage("login")}>{ctx.currentUser ? <img src="./images/profile-pic.jpg" alt="profile"/> : <CgProfile size={30}/>}</Login>
		</SideNavContainer> : <div></div>
	)
}

const SideNavContainer = styled.div`
	background: var(--dark-blue);
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 30px 0;
	margin: 30px;
	width: 6rem;
	height: 100%;

	@media screen and (max-width: 1024px) {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 0;
		flex-direction: row;
		justify-content: center;
		width: calc(100vw - 60px);
		height: auto;
		margin: 30px;
		padding: 15px;
	}

	@media screen and (max-width: 576px) {
		border-radius: 0;
		flex-direction: row;
		justify-content: center;
		width: 100vw;
		height: auto;
		margin: 0;
		padding: 10px 30px;
	}
`
const Logo = styled(Link)`
	margin-bottom: 75px;
	display: flex;

	@media screen and (max-width: 1024px) {
		align-self: center;
		margin-bottom: 0;
	}

	@media screen and (max-width: 576px) {
		img{
			width: 25px;
			height: auto;
		}
	}
`
const NavItems = styled.div`
	display: flex;
	align-items: center;
	flex-direction: inherit;
	gap: 50px;
	justify-content: flex-start;
	flex: 1;

	@media screen and (max-width: 1024px) {
		gap: 20px;
		justify-content: center;
	}
`
const Home = styled(Link)`
	display: flex;
	align-self: center;

	&.active img,
	img:hover{
		cursor: pointer;
		filter: brightness(0) saturate(100%) invert(99%) sepia(4%) saturate(8%) hue-rotate(121deg) brightness(115%) contrast(100%);
	}
`
const Movies = styled(Link)`
	display: flex;
	align-self: center;

	&.active img,
	img:hover{
		cursor: pointer;
		filter: brightness(0) saturate(100%) invert(99%) sepia(4%) saturate(8%) hue-rotate(121deg) brightness(115%) contrast(100%);
	}
`
const Television = styled(Link)`
	display: flex;
	align-self: center;
	color: var(--grayish-blue);
	
	&.active svg,
	svg:hover{
		cursor: pointer;
		filter: brightness(0) saturate(100%) invert(99%) sepia(4%) saturate(8%) hue-rotate(121deg) brightness(115%) contrast(100%);
	}
`
const Bookmarks = styled(Link)`
	display: flex;
	align-self: center;

	svg{
		color: var(--grayish-blue);

		:hover{
			fill: #fff;
			cursor: pointer;
		}
	}

	&.active svg{
		color: #fff;
	}
`
const Login = styled(Link)`
	display: flex;
	img{
		border: 2px solid #fff;
		border-radius: 50%;
		box-sizing: border-box;
		margin-top: 20px;
		width: 40px;
		height: 40px;
	}

	a:hover .logout{
		display: block;
	}

	svg{
		color: var(--grayish-blue);

		:hover{
			fill: #fff;
			cursor: pointer;
		}
	}

	&.active svg{
		color: #fff;
	}

	@media screen and (max-width: 1024px) {
		img{
			margin-top: 0;
			width: 30px;
			height: 30px;
		}
	}
`

const PopoverMenu = styled.div`
	background-color: #fff;
	// display: none;
	position: relative;
	width: 70px;
	height: 30px;

	::before{
		background-color: #fff;
		content: "";
		position: absolute;
		bottom: -5px;
		left: 50%;
		transform: translateX(-50%) rotate(45deg);
		width: 10px;
		height: 10px;
	}
`

const Logout = styled(Link)`
	color: var(--dark-blue);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	line-height: 0;
	text-decoration: none;

	:hover{
		cursor: pointer;
		text-decoration: underline
	}
`