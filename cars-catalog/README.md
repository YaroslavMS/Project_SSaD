# Catalog of cars

## Опис Проєкту

Цей проєкт є веб-застосунком для перегляду каталогу автомобілів, додавання нових записів та перегляду деталей авто. Використовується база даних MongoDB.

## Технології

- **Фронтенд**: React, React Router, React Query, Axios

- **Бекенд**: Node.js, Express

- **База даних**: MongoDB

- **Управління станом**: React Query

- **Документація**: Swagger, JSDoc

##  Налаштування Проєкту

1. **Клонування репозиторію**

```bash
git clone <repo-url>
cd project-directory
```

2. **Встановлення залежностей**

```bash
npm install
```

3. **Запуск сервера**

```bash
npm run server
```

4. **Запуск клієнта**

```bash
npm start
```

## Налаштування MongoDB

Для підключення до бази даних MongoDB створіть файл .env у кореневій директорії та додайте:

```bash
MONGO_URI=your_mongodb_connection_string
```

## Структура Проєкту

```bash
src/
├── assets/
│   ├── styles/
│   │   ├── global.css
├── components/
│   ├── screens/
│   │   ├── car-detail/
│   │   │   ├── CarDetail.jsx
│   │   ├── home/
│   │   │   ├── create-car-form/
│   │   │   │   ├── CreateCarForm.jsx
│   │   │   │   ├── CreateCarForm.module.css
│   │   │   │   ├── ErrorMessage.jsx
│   │   │   ├── CarItem.jsx
│   │   │   ├── cars.data.js
│   │   │   ├── Home.jsx
│   │   │   ├── Home.module.css
│   │   │   ├── Price.jsx
│   ├── ui/
│   │   ├── Catalog.jsx
│   │   ├── Router.jsx
├── services/
│   ├── car.service.js
├── App.css
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
├── setupTests.js
├── .gitignore
```

## Функціонал

- Перегляд списку автомобілів

- Перегляд детальної інформації про автомобіль

- Додавання нових автомобілів через форму

## Форми

Форми написані за допомогою react-hook-form, валідація також з цього модуля.

## Документація API

Документація API доступна через Swagger за адресою:

```bash
http://localhost:5000/api-docs
```

## API-Ендпоінти

Проєкт містить такі API-запити через Axios:

### Отримати всі автомобілі

```bash
async getAll() {
  const response = await axios.get('http://localhost:5000/cars');
  return response.data;
}
```

- **Метод:** 
```bash 
GET
```

- **URL:** 
```bash 
http://localhost:5000/cars
```

- **Відповідь:** 
```bash
Список автомобілів
```

### Отримати автомобіль за ID

```bash
async getById(id) {
  const response = await axios.get(`http://localhost:5000/cars/${id}`);
  return response.data;
}
```

- **Метод:** 
```bash
GET
```

- **URL:** 
```bash
http://localhost:5000/cars/:id
```

- **Відповідь:** 
```bash
Деталі автомобіля
```

### Додати новий автомобіль

```bash
async create(data) {
  return axios.post('http://localhost:5000/cars', data);
}
```

- **Метод:** 
```bash
POST
```

- **URL:** 
```bash
http://localhost:5000/cars
```

- **Тіло запиту:** 
```bash
{ make, model, year, price }
```

- **Відповідь:** 
```bash
Створений об'єкт автомобіля
```

## Cookie Policy

Проєкт використовує `react-cookie-consent` для відповідності GDPR.  
Користувач отримує сповіщення про використання cookie при першому вході на сайт.  
Файли cookie зберігаються у браузері на 150 днів.

## Ліцензія

Цей проєкт ліцензований за MIT License. Деталі дивіться у файлі 
```bash
LICENSE
```
.