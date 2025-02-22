import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { CarService } from '../../../services/car.service'
import CarItem from '../home/CarItem'
const CarDetail = () => {
	const { id } = useParams()
	const [car, setCar] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			const response = await CarService.getById(id)
			console.log(response)
			setCar(response)
		}
		fetchData()
	}, [id])

	if (!car?.name) return <p>Loading...</p>

	return (
		<div>
			<Link to='/'>Back</Link>
			<CarItem car={car} />
		</div>
	)
}
export default CarDetail
