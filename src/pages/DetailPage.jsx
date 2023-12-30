import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { Context } from '../context/context'
import Loading from '../components/Loading'

function DetailPage() {
	const { state, handleFunction } = useContext(Context)
	const { detailRestaurant } = state
	const { id } = useParams()

	useEffect(() => {
		handleFunction.getDetailRestaurant(id)
	}, [id, handleFunction])

	let rating = []

	for (let index = 0; index < 5; index++) {
		if (index < detailRestaurant?.rating) {
			rating.push(<MdOutlineStar key={index} />)
		} else rating.push(<MdOutlineStarBorder key={index} />)
	}
	return (
		<section className="detail-page">
			<div className="detail-back">
				<Link to="/">
					<IoIosArrowBack />{' '}
				</Link>
			</div>
			<div className="detail-content">
				{detailRestaurant ? (
					<div className="detail-container">
						<div className="image-container">
							<div>
								<img src={detailRestaurant.image} alt={detailRestaurant.name} />
							</div>
						</div>

						<div className="info-container">
							<div className="info-header">
								<div>
									<h2>{detailRestaurant.name}</h2>
									<div className="restaurnat-rating">
										{rating.map((item, index) => (
											<span key={index}>{item}</span>
										))}
									</div>
									<p>Rp {detailRestaurant.price}</p>
								</div>
							</div>

							<hr />

							<div className="description-container">
								<h6>Description</h6>
								<p>{detailRestaurant.description}</p>
							</div>
						</div>
					</div>
				) : (
					<Loading />
				)}
			</div>
		</section>
	)
}

export default DetailPage
