import React from 'react'
import { FaCircle } from 'react-icons/fa'

function ButtonOpen({ isOpen }) {
	return (
		<div>
			<span>{isOpen ? <FaCircle className="open" /> : <FaCircle className="close" />}</span>
		</div>
	)
}

export default ButtonOpen
