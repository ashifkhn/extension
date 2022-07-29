import React, { useState, useReducer } from 'react'
import './landingpage.scss'
import { useNavigate } from 'react-router-dom'

export const LandingPage = () => {
	const [name, setName] = useState('')
	const Handler = (e) => {
		setName(e.target.value)
		localStorage.setItem('name', name)
	}
	const navigate = useNavigate()
	return (
		<div className='container'>
			<form action=''>
				<div className='home_text'>Hello! What should we call you? </div>
				<input type='text' onChange={Handler} />
				<hr
					style={{
						color: '#000000',
						backgroundColor: '#000000',
						height: 0.5,
						width: '100%',
						borderColor: '#000000',
					}}
				/>
				<button onClick={() => navigate('/home')}> Continue </button>
			</form>
		</div>
	)
}
