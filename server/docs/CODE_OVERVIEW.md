# Code Overview

- [Code Overview](#code-overview)
  - [Interesting Dependencies](#interesting-dependencies)
  - [Application Structure](#application-structure)
  - [Error Handling](#error-handling)
  - [Basic Requests](#basic-requests)

## Interesting Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests

## Application Structure

- `index.js` The entry point to our application. This file defines our express server and connects it to all the middlewares needed. It also requires the routes and models we'll be using in the application.
- `api/` This folder contains the route definitions for our API.
- `server/` This folder contains configuration for the app as well as a central location for configuration/environment variables.

## Error Handling

Notice that the code don't use `console.log()`, instead uses a custom logger built with `winston` and `morgan`. All the important events are saved to `logs/` folder and shows in the terminal. So if you run into any error and want to check the available info, visit the `logs/` folder!

If an error happens the server must restart as is using `nodemon` in dev and `pm2` in production. Also note I used extensively `try...catch` to avoid Unhandled Errors.

In `api/v1/echo.js`, we define a error-handling middleware for handling inputs: `handleInputError`. This middleware will respond with a 422 status code and format the response to have error messages the clients can understand

## Basic Requests

- GET `/ping`

```sh
curl https://parrot-echo-server.herokuapp.com/ping
```

- POST `/api/v1/echo`

```sh
curl --data-urlencode "name=Israel Antonio Rosales Laguan" \
  curl -d "id=101&message=hello" https://parrot-echo-server.herokuapp.com/echo
```
