const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(
	cors({
		origin: 'http://localhost:3000',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
		optionsSuccessStatus: 204,
	})
)

app.use((req, res, next) => {
	res.setHeader('Content-Security-Policy', "script-src 'self' 'unsafe-inline';")
	next()
})

app.use(express.json())

const uri = 'mongodb://localhost:27017/cars-catalog'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
	console.log('MongoDB database connection established successfully')
})

const Schema = mongoose.Schema

const carSchema = new mongoose.Schema({
	id: Number,
	name: String,
	image: String,
	price: Number,
})

const Car = mongoose.model('Car', carSchema)

app.get('/cars', async (req, res) => {
	try {
		const cars = await Car.find()
		res.json(cars)
	} catch (err) {
		res.status(400).json('Error: ' + err)
	}
})

app.post('/cars', async (req, res) => {
	try {
		const newCar = new Car(req.body)
		console.log(newCar)
		await newCar.save()
		res.status(201).json('Car added successfully')
	} catch (err) {
		res.status(400).json('Error: ' + err)
	}
})

app.get('/cars/:id', async (req, res) => {
	const id = +req.params.id

	try {
		const car = await Car.findOne({ id: id })
		if (!car) {
			return res.status(404).json({ message: 'Авто не знайдено' })
		}
		res.json(car)
	} catch (err) {
		res.status(400).json({ message: 'Помилка: ' + err.message })
	}
})

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})
