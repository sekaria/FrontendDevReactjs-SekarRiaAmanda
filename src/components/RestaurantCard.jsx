import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md'
import ButtonOpen from './ButtonOpen'

function RestaurantCard({ data }) {
	const navigate = useNavigate()

	let rating = []

	for (let index = 0; index < 5; index++) {
		if (index < data.rating) {
			rating.push(<MdOutlineStar />)
		} else rating.push(<MdOutlineStarBorder />)
	}

	return (
		<div className="restaurant-card">
			<div>
				<img src={data.image} alt={data.name} />
			</div>
			<h3>{data.name}</h3>
			<div className="restaurnat-rating">
				{rating.map((item, index) => (
					<span key={index}>{item}</span>
				))}
			</div>
			<div className="restaurant-category">
				<div className="category-price">
					<p>
						{data.category} - Rp {data.price}
					</p>
				</div>
				<div className="open-status">
					<ButtonOpen isOpen={data.isOpen} />
					<p>{data.isOpen ? 'Open' : 'Closed'}</p>
				</div>
			</div>
			<div className="learn-button">
				<button onClick={() => navigate(`detail/${data.id}`)}>LEARN MORE</button>
			</div>
		</div>
	)
}

export default RestaurantCard
