import React from 'react'
import Heart from '../icons/heart.svg'
import Play from '../icons/play.svg'
import Dots from '../icons/dots.svg'

const Icons = () => {
	return (
		<div className='icon-container'>
			<img className='icon heart' src={Heart} alt='heart icon' />
			<img className='icon play' src={Play} alt='play icon' />
			<img className='icon dot' src={Dots} alt='dots icon' />
		</div>
	)
}

export default Icons
