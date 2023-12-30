import axios from 'axios'
import { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = (props) => {
	const [data, setData] = useState([])
	const [categorySelected, setCategorySelected] = useState('')
	const [category, setCategory] = useState()
	const [priceSelected, setPriceSelected] = useState('')
	const [price, setPrice] = useState([
		{ label: 'Cheapest', value: 'Cheapest' },
		{ label: 'Most Expensive', value: 'Most Expensive' },
	])
	const [isOpen, setIsOpen] = useState(false)
	const [detailRestaurant, setDetailRestaurant] = useState(null)

	const getRestaurants = async () => {
		try {
			const API = await axios.get('https://my-json-server.typicode.com/sekaria/api-restaurant/restaurant')

			let option = API.data.map((data) => {
				return {
					label: data.category,
					value: data.category,
				}
			})

			const duplicatedDelete = [...new Map(option.map((val) => [JSON.stringify([val.label, val.name]), val])).values()]
			setCategory(duplicatedDelete)

			let filter = categorySelected ? API.data.filter((val) => val.category === categorySelected.label) : API.data

			if (priceSelected) {
				if (priceSelected.label === 'Most Expensive') {
					let sorting = filter.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
					setData(sorting)
				} else if (priceSelected.label === 'Cheapest') {
					let sorting = filter.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
					setData(sorting)
				}
			} else {
				setData(filter)
			}

			if (isOpen) {
				setData((prevData) => prevData.filter((item) => item.isOpen))
			} else {
				setData(filter)
			}
		} catch (error) {
			window.alert(error.message)
		}
	}

	const getDetailRestaurant = async (restaurantId) => {
		try {
			const API = await axios.get(`https://my-json-server.typicode.com/sekaria/api-restaurant/restaurant/${restaurantId}`)
			setDetailRestaurant(API.data)
		} catch (error) {
			window.alert(error.message)
		}
	}

	let state = {
		data,
		setData,
		category,
		setCategory,
		categorySelected,
		setCategorySelected,
		price,
		setPrice,
		priceSelected,
		setPriceSelected,
		isOpen,
		setIsOpen,
		detailRestaurant,
	}

	let handleFunction = {
		getRestaurants,
		getDetailRestaurant,
	}
	return <Context.Provider value={{ state, handleFunction }}>{props.children}</Context.Provider>
}
