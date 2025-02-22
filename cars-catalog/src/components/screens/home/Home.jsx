import { useEffect, useState } from 'react'
import { CarService } from '../../../services/car.service.js'
import Catalog from '../../ui/Catalog.jsx'

function Home() {
	const [cars, setCars] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await CarService.getAll()
			setCars(response)
		}

		fetchData()
	}, [])

	return (
		<div>
			<h1>Cars catalog</h1>
			<Catalog cars={cars} setCars={setCars} />
		</div>
	)
}

export default Home
