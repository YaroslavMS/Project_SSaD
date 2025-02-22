import axios from 'axios'
export const CarService = {
	/**
	 * Отримати всі автомобілі
	 * @returns {Promise<Object[]>} Масив автомобілів
	 */
	async getAll() {
	  const response = await axios.get('http://localhost:5000/cars');
	  return response.data;
	},
  
	/**
	 * Отримати автомобіль за ID
	 * @param {string} id - ID автомобіля
	 * @returns {Promise<Object>} Дані про автомобіль
	 */
	async getById(id) {
	  const response = await axios.get(`http://localhost:5000/cars/${id}`);
	  return response.data;
	},
  
	/**
	 * Додати новий автомобіль
	 * @param {Object} data - Дані про автомобіль
	 * @param {string} data.name - Назва автомобіля
	 * @param {number} data.price - Ціна автомобіля
	 * @param {string} data.image - URL зображення
	 * @returns {Promise<Object>} Створений автомобіль
	 */
	async create(data) {
	  return axios.post('http://localhost:5000/cars', data);
	},
  };
