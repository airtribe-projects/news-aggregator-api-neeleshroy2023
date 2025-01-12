# News Aggregator API

## Overview

The News Aggregator API is a service that collects news articles from various sources and provides a unified interface to access them. This project is designed to help users stay updated with the latest news from multiple sources in one place.

## Features

- Fetch news articles from https://newsapi.org/
- Search for news articles by keywords
- User registration and login
- Cache news articles
- Periodic updates to news every 5 minutes

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/neeleshroy2023/news-aggregator-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd news-aggregator-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Access the API at `http://localhost:3000`

## API Endpoints

- `POST /users/signup` - Register the user
- `POST /users/login` - Login users
- `GET /users/preferences` - Get user preferences
- `PUT /users/preferences` - Change preferences for the user
- `GET /news` - Get latest news in US
- `GET /search/:keyword` - Search news articles by keywords, it will match title and description

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```
NEWS_API_KEY="your_api_key"
JWT_SECRET="your_secret"
JWT_TEST_TOKEN="your_test_token"
MONGO_URI="atlas_connection_string"
ENV="development or anything"
```

## Testing

To run the tests, use the following command:

```bash
npm test
```

Make sure to have all the necessary environment variables set up in your `.env` file before running the tests.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Memory-cache
- JWT for authentication
- Argon2 for encryption

## Future Enhancements

- Add more news sources
- Implement user notifications for breaking news
- Add user roles and permissions
- Improve caching mechanism

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact Neelesh Roy at neeleshroy@example.com.
