# Strugglers-C18-Social-Network-API

This is a simple Mongoose API demo showcasing how to build and interact with a MongoDB database using Mongoose. The API allows you to perform CRUD operations on two main resources: `users` and `thoughts`. The API is designed to manage user data and their associated thoughts and reactions.

## Table of Contents

- [Links](#links)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Models](#models)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Links


## Installation

1. Clone the repo on your local machine.

2. Run "npm i" to install all required packages.

3. User the POST, GET and DELETE routes in Insomnia.

## Usage

To start the API server, run the following command: "npm start"

## Endpoints

### Users

- `GET /api/users`: Get all users.
- `GET /api/users/:id`: Get a single user by their ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by their ID.
- `DELETE /api/users/:id`: Delete a user by their ID.
- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

### Thoughts

- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a single thought by its ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update a thought by its ID.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by its ID.
- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

## Dependencies

The project uses the following major dependencies:

- [Express](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)

## Contributing

The Amazing staff at the UCF coding boot camp.

## License

This project is licensed under the MIT License.
