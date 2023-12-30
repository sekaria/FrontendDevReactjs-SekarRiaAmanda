import React from 'react'
import HomeHeader from '../components/HomeHeader'
import RestaurantLists from '../components/RestaurantLists'
import Filter from '../components/Filter'

function HomePage() {
	return (
		<div>
			<HomeHeader />
			<hr />
			<Filter />
			<hr />
			<RestaurantLists />
		</div>
	)
}

export default HomePage
