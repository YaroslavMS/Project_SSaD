const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

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

// Swagger конфігурація
const swaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Car API',
			version: '1.0.0',
			description: 'API для роботи з автомобілями',
		},
	},
	apis: ['./server.js'], // Шлях до цього файлу
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Отримати всі автомобілі
 *     description: Повертає список усіх автомобілів
 *     responses:
 *       200:
 *         description: Масив автомобілів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Toyota Corolla"
 *                   image:
 *                     type: string
 *                     example: "https://example.com/image.jpg"
 *                   price:
 *                     type: number
 *                     example: 20000
 */
app.get('/cars', async (req, res) => {
	try {
		const cars = await Car.find()
		res.json(cars)
	} catch (err) {
		res.status(400).json('Error: ' + err)
	}
})

/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     summary: Отримати автомобіль за ID
 *     description: Повертає інформацію про автомобіль
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID автомобіля
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Дані про автомобіль
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Toyota Corolla"
 *                 image:
 *                   type: string
 *                   example: "https://example.com/image.jpg"
 *                 price:
 *                   type: number
 *                   example: 20000
 *       404:
 *         description: Автомобіль не знайдено
 */
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
	console.log(`Swagger доступний на http://localhost:${port}/api-docs`)
})
