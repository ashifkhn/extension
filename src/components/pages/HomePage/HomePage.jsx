import React from 'react'
import { Quotes } from './comp/Quotes'
import { Weather } from './comp/Weather'
import { Time } from './comp/Time'
import './homepage.scss'

export const HomePage = () => {
	return (
		<div className='home_container'>
			<div className='head'>
				<form
					action='https://www.google.com/search'
					method='get'
					name='searchform'
				>
					<input
						type='text'
						placeholder='Google Search'
						style={{ padding: '10px' }}
					/>
				</form>
				<div className='weather'>
					{' '}
					<Weather />
				</div>
			</div>
			<div className='time-quote'>
				<Time />
				<Quotes />
			</div>
		</div>
	)
}
