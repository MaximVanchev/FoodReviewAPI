# FoodReviewAPI

## Overview

FoodReviewAPI is a RESTful API designed to manage and retrieve food reviews. This project allows users to create, read, update, and delete reviews for various food items. It is built with scalability and ease of use in mind, making it a great tool for developers looking to integrate food review functionality into their applications.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete food reviews.
- **Search and Filter**: Easily search and filter reviews by food item, rating, or user.
- **User Authentication**: Secure endpoints with user authentication and authorization.
- **Scalable Architecture**: Built with scalability in mind to handle a large number of reviews and users.
- **RESTful Design**: Follows REST principles for easy integration with other systems.

## Technologies Used

- **Node.js**: The runtime environment for the API.
- **Express.js**: The web framework used to build the API.
- **MongoDB**: The database used to store reviews and user data.
- **Mongoose**: The ODM (Object Data Modeling) library used to interact with MongoDB.
- **JWT (JSON Web Tokens)**: Used for user authentication and authorization.
- **Swagger**: API documentation tool to provide clear and interactive documentation.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MaximVanchev/FoodReviewAPI.git
   cd FoodReviewAPI
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/foodreviewapi
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the server**:
   ```bash
   npm start
   ```

5. **Access the API**:
   The API will be running at `http://localhost:3000`.

## API Documentation

The API documentation is available via Swagger UI. After starting the server, you can access the documentation at:

```
http://localhost:3000/api-docs
```

## Endpoints

### Reviews

- **GET /reviews**: Get all reviews.
- **GET /reviews/:id**: Get a specific review by ID.
- **POST /reviews**: Create a new review.
- **PUT /reviews/:id**: Update an existing review.
- **DELETE /reviews/:id**: Delete a review.

### Users

- **POST /users/register**: Register a new user.
- **POST /users/login**: Login and receive a JWT token.
- **GET /users/:id**: Get user details by ID.
- **PUT /users/:id**: Update user details.
- **DELETE /users/:id**: Delete a user.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Special thanks to all contributors who have helped improve this project.
- Inspired by the need for a simple and scalable food review system.

## Contact

For any questions or suggestions, please feel free to reach out:

- **Maxim Vanchev**
- GitHub: [MaximVanchev](https://github.com/MaximVanchev)
- Email: maxim.van.mv@gmail.com

---

Thank you for using FoodReviewAPI! We hope it serves your needs well. Happy coding! 🚀
