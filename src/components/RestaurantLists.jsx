import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/context'
import RestaurantCard from './RestaurantCard'
import Loading from './Loading'

function RestaurantLists() {
	const [limit, setLimit] = useState(8)
	const [isLoading, setLoading] = useState(false)
	const { state, handleFunction } = useContext(Context)
	const { data, categorySelected, priceSelected, isOpen } = state
	const { getRestaurants } = handleFunction

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			await getRestaurants()
			setLoading(false)
		}

		fetchData()
	}, [categorySelected, priceSelected, isOpen])

	const handleLoad = () => {
		setLoading(true)

		setTimeout(() => {
			setLimit(limit + 4)
			setLoading(false)
		}, 1000)
	}

	return (
		<section className="restaurant-lists">
			<p>All Restaurants</p>
			<div>
				{isLoading ? (
					<Loading />
				) : (
					<div className="restaurant-cards-container">
						{data
							.filter((item, index) => item && index < limit)
							.map((item) => (
								<RestaurantCard data={item} key={item.id} />
							))}
					</div>
				)}
			</div>

			{data.length > limit && !isLoading && (
				<div className="load-button">
					<button onClick={handleLoad}>LOAD MORE</button>
				</div>
			)}
		</section>
	)
}

export default RestaurantLists
