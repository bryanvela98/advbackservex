# Proy - Rental Order Management System

## Overview

This project is a **Rental Order Management System** built with Node.js, Express, and MongoDB. It provides APIs for managing users, businesses, and rental orders. The client-side application fetches and displays rental orders using JavaScript and HTML.

---

## Features

### Server-Side

- **User Management**:

  - Register users.
  - Retrieve user details.
  - Update user information.

- **Business Management**:

  - Create businesses.
  - Retrieve business details.
  - Add products to businesses.

- **Rental Order Management**:

  - Create rental orders.
  - Retrieve rental orders.
  - Resolve rental orders.

- **Authentication**:
  - JWT-based authentication for secure user sessions.
  - Middleware for checking login/logout status.

### Client-Side

- Fetch and display rental orders dynamically using JavaScript.
- Render rental order details such as order number, total price, and status.

---

## Project Structure

```
client/
    [`client/index.html`](client/index.html )
    [`client/index.js`](client/index.js )
server/
    .env
    .gitignore
    [`server/package.json`](server/package.json )
    src/
        [`server/src/app.js`](server/src/app.js )
        [`server/src/utils.js`](server/src/utils.js )
        config/
            [`server/src/config/config.js`](server/src/config/config.js )
            [`server/src/config/db.config.js`](server/src/config/db.config.js )
        controller/
            [`server/src/controller/business.controller.js`](server/src/controller/business.controller.js )
            [`server/src/controller/rentalOrder.controller.js`](server/src/controller/rentalOrder.controller.js )
            [`server/src/controller/user.controller.js`](server/src/controller/user.controller.js )
        dao/
            [`server/src/dao/business.dao.js`](server/src/dao/business.dao.js )
            [`server/src/dao/rentalOrder.dao.js`](server/src/dao/rentalOrder.dao.js )
            [`server/src/dao/user.dao.js`](server/src/dao/user.dao.js )
            dto/
                [`server/src/dao/dto/business.dto.js`](server/src/dao/dto/business.dto.js )
                [`server/src/dao/dto/rentalOrder.dto.js`](server/src/dao/dto/rentalOrder.dto.js )
                [`server/src/dao/dto/user.dto.js`](server/src/dao/dto/user.dto.js )
            models/
                [`server/src/dao/models/business.model.js`](server/src/dao/models/business.model.js )
                [`server/src/dao/models/rentalOrder.model.js`](server/src/dao/models/rentalOrder.model.js )
                [`server/src/dao/models/user.model.js`](server/src/dao/models/user.model.js )
        middleware/
            [`server/src/middleware/auth.js`](server/src/middleware/auth.js )
        repositories/
            [`server/src/repositories/business.repository.js`](server/src/repositories/business.repository.js )
            [`server/src/repositories/rentalOrder.repository.js`](server/src/repositories/rentalOrder.repository.js )
            [`server/src/repositories/user.repository.js`](server/src/repositories/user.repository.js )
        routes/
            [`server/src/routes/business.router.js`](server/src/routes/business.router.js )
            [`server/src/routes/rentalOrder.router.js`](server/src/routes/rentalOrder.router.js )
            [`server/src/routes/user.router.js`](server/src/routes/user.router.js )
```

---

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/bryanvela98/advbackservex.git
   cd advbackservex/server
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the `server/` directory.

4. Start the server:

   ```sh
   npm start
   ```

5. Open the client:
   - Navigate to `client/index.html` in your browser.

---

## API Endpoints

### User Routes

- `GET /api/user/` - Retrieve all users.
- `GET /api/user/:uid` - Retrieve user by ID.
- `POST /api/user/` - Register a new user.

### Business Routes

- `GET /api/business/` - Retrieve all businesses.
- `GET /api/business/:bid` - Retrieve business by ID.
- `POST /api/business/` - Create a new business.
- `POST /api/business/:bid` - Add a product to a business.

### Rental Order Routes

- `GET /api/order/` - Retrieve all rental orders.
- `GET /api/order/:oid` - Retrieve rental order by ID.
- `POST /api/order/` - Create a new rental order.
- `POST /api/order/:oid` - Resolve a rental order.

---

## Technologies Used

- **Backend**:

  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT for authentication
  - bcrypt.js for password hashing

- **Frontend**:
  - HTML
  - JavaScript

---

## License

This project is licensed under the ISC License.

---

## Author

Developed by Bryan Vela. For more information, visit the [GitHub repository](https://github.com/bryanvela98/advbackservex).
