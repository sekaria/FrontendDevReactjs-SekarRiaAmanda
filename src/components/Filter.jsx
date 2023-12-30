import React, { useContext } from 'react'
import { Context } from '../context/context'
import Select from 'react-select'

function Filter() {
	const { state, handleFunction } = useContext(Context)
	const { category, categorySelected, setCategorySelected, price, priceSelected, setPriceSelected, isOpen, setIsOpen } = state
	const { getRestaurants } = handleFunction

	const clearFilter = () => {
		setCategorySelected('')
		setPriceSelected('')
		setIsOpen(false)
		getRestaurants()
	}

	const handleOpenNowChange = () => {
		setIsOpen((prevOpenNow) => !prevOpenNow)
	}

	return (
		<section className="filter-container">
			<div className="filter-options">
				<span className="filter-title">Filter by:</span>
				<div className="filter-elements">
					<div className="filter-element open-option">
						<input name="open" type="radio" id="radio" checked={isOpen} onChange={handleOpenNowChange} />
						<label htmlFor="radio">Open Now</label>
					</div>
					<Select className="filter-element price-option" name="Price" placeholder="Price" isClearable={true} options={price} onChange={(e) => setPriceSelected(e)} value={priceSelected} />
					<Select className="filter-element category-option" name="Categories" placeholder="Categories" isClearable={true} options={category} onChange={(e) => setCategorySelected(e)} value={categorySelected} />
				</div>
			</div>
			<div className="clear-button">
				<button onClick={() => clearFilter()}>CLEAR ALL</button>
			</div>
		</section>
	)
}

export default Filter
