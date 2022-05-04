import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import styled from 'styled-components'
import { Context } from './Context'

export default function Logout({auth}) {

	const ctx = useContext(Context)

	const navigation = useNavigate()

	const handleLogout = () => {
		signOut(auth)
		.then(() => {
				ctx.setCurrentUser([])
				window.location="/login"
		}).catch((err) => {
				console.log(err.message)
		})
	}

  return (
    <LogoutContainer>
        <LogoutInner>
            <h1>Sure you wanna log out?</h1>
            <div className='btn-links'>
							<button onClick={() => {handleLogout(); navigation('/login'); ctx.setIsCurrentPage("login")}}>Yes</button>
							<button className='cancel-btn' onClick={() => {ctx.setIsCurrentPage("home");  navigation('/')}}>Cancel</button>
            </div>
        </LogoutInner>
    </LogoutContainer>
  )
}

const LogoutContainer = styled.div`

	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: calc(100% - 60px);

	button{
		background-color: var(--tomato);
		color: #fff;
		border: none;
		border-radius: 5px;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		width: 110px;
		height: 30px;

		:hover{
			background-color: #fff;
			color: #000;
			cursor: pointer;
		}
	}
`

const LogoutInner = styled.div`
	background-color: var(--dark-blue);
	border-radius: 10px;
	padding: 50px;

	h1{
		margin-bottom: 40px;
		margin-top: 0;
	}

	.btn-links{
		display: flex;
		justify-content: space-evenly;
	}

	.cancel-btn{
		align-self: center;
		background: transparent;
		border: none;
		color: #fff;

		:hover{
			background: transparent;
			color: #fff;
			text-decoration: underline;
		}
	}
`