import CarItem from '../screens/home/CarItem'
import CreateCarForm from '../screens/home/create-car-form/CreateCarForm'

const Catalog = ({ cars, setCars }) => {
	return (
		<div>
			<CreateCarForm setCars={setCars} />

			{cars.length ? (
				cars.map(car => <CarItem key={car.id} car={car} />)
			) : (
				<p>There are no cars</p>
			)}
		</div>
	)
}

export default Catalog
