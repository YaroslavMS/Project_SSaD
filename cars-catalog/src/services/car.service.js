import axios from 'axios';

export const CarService = {
  /**
   * Отримати всі автомобілі.
   * @async
   * @function
   * @returns {Promise<Object[]>} Масив об'єктів автомобілів.
   * @throws {Error} У разі помилки HTTP-запиту.
   */
  async getAll() {
    const response = await axios.get('http://localhost:5000/cars');
    return response.data;
  },

  /**
   * Отримати автомобіль за ID.
   * @async
   * @function
   * @param {string} id - ID автомобіля.
   * @returns {Promise<Object>} Об'єкт автомобіля.
   * @throws {Error} У разі, якщо автомобіль не знайдено або виникла помилка запиту.
   */
  async getById(id) {
    const response = await axios.get(`http://localhost:5000/cars/${id}`);
    return response.data;
  },

  /**
   * Додати новий автомобіль.
   * @async
   * @function
   * @param {Object} data - Дані нового автомобіля.
   * @param {string} data.name - Назва автомобіля.
   * @param {number} data.price - Ціна автомобіля.
   * @param {string} data.image - URL зображення автомобіля.
   * @returns {Promise<Object>} Об'єкт створеного автомобіля.
   * @throws {Error} У разі помилки під час створення автомобіля.
   */
  async create(data) {
    const response = await axios.post('http://localhost:5000/cars', data);
    return response.data;
  },
};
