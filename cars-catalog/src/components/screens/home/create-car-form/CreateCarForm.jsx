import { useForm } from 'react-hook-form'
import { CarService } from '../../../../services/car.service'
import styles from './CreateCarForm.module.css'
import ErrorMessage from './ErrorMessage.jsx'

const CreateCarForm = ({ setCars }) => {

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	const createCar = async data => {
		const id = Date.now()
		CarService.create({ id, ...data })
		setCars(prev => [...prev, { id: prev.length + 1, ...data }])
		reset()
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(createCar)}>
			<input
				placeholder='Name'
				{...register('name', { required: 'Name is required' })}
			/>
			<ErrorMessage error={errors?.name?.message} />
			<input placeholder='Price' {...register('price', { required: true })} />
			<input placeholder='Image' {...register('image', { required: true })} />

			<button className='btn'>Create</button>
		</form>
	)
}

export default CreateCarForm
