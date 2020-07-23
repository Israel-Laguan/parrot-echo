# Parrot Echo Server

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues-open][issues-open-shield]][issues-url]
[![Issues-closed][issues-closed-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]
[![contributions welcome][contributions-welcome]][issues-url]

<div align="center">
  <img src="https://img.icons8.com/color/48/000000/parrot.png" alt="Logo"/>
  <div align="center">
    <h2>Parrot Echo Server</h2>
    <p>RESTful server powered by Express.js</p>
    🖊️🐞
    <a href="https://github.com/Israel-Laguan/parrot-echo/issues">Report a Bug</a>
    🙋‍♂️
    <a href="https://github.com/Israel-Laguan/parrot-echo/issues">Request Feature</a>
  </div>
</div>

Live at [parrot-echo-server.herokuapp.com][live]

## Table of Contents

- [Parrot Echo Server](#parrot-echo-server)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [How to use it](#how-to-use-it)
  - [Getting started](#getting-started)
  - [Code Overview](#code-overview)
  - [Author](#author)
  - [Contributing](#contributing)
  - [Show your support](#show-your-support)
  - [License](#license)

## Features

[![Framework][badge-framework]][framework-url]
![javascript][]
![nodejs][]
![mysql][]
![heroku][]

- Async/Await support
- WinstonJs Logger Implementation
- Error Handling
- Basic request parameters Validation
- Open Api Specification implemented through swagger and swagger-ui
- Enviroment variables to hold configuration values `.env` file
- Functional Programming with Middlewares and helpers
- Standard Coding with Eslint and Prettier, this helps to keep thing into prespective.

[![JavaScript Style Guide][badge-standard]][standard-style]

## How to use it

This code is meant to be run in a server accesible online, so other services can use it, in this case a shop/store frontend. This is a Rest Api solution using basic database create, read, update and delete operations (CRUD).

I use a RESTful API to be used by any other client, but for human readability I also added `swagger` (it can even be used as an ad hoc admin panel!). To use it from a client you need to make HTPP(S) requests, for example using `curl`:

```sh
> curl https://parrot-echo-server.herokuapp.com/ping -v
```

But you can use any language or library: PHP, GO, C++, Rust, etc.

The endpoints:

- GET `/` - Swagger Documentation
- GET `/api/v1/echo/` - Echo your message

More info in the swagger documentation [Live Here][live]

## Getting started

- Be sure to setup `docker-compose` and have `git`.
- Run this:

```sh
> git clone https://github.com/Israel-Laguan/coolticket-server.git
> cd coolticket-server
> docker-compose build server
> docker-compose up server
```

- Enter [localhost:8000][] in a browser for the Swagger documentation of the server.

Not a fan of Docker or need more information? VisContinue with instructions to learn more about how to setup your PC for run the server!

## Code Overview

This backend's code is made using JavaScript language, and [Node.js](nodejs.org) runtime. With a package named Express.js I managed to create the server, routers and middleware necesary. Also MySQL is used to provide a modern, open sourced and perfomant database layer. Lastly, the server have auxiliar packages for development and deployment to ensure is production ready, enterprise level.

As with most of node.js applications, we would want to install node and npm in our local PC in order to run the server or develop code. This folder include all the necesary files to run the server local or online, just take into account that you'll need to use a terminal as no GUI is available yet.

If you want to develop you have to setup a good dev environment. First of all a good text editor/IDE, I prefer to use Visual Studio Code, but you can use anything else. For the use of VSCode I provide configuration files in the hidden folder `.vscode`.

For more information about the code please check the [code overview](docs/CODE_OVERVIEW.md).

## Author

<table style="width:100%">
  <tr>
    <td>
        <div align="center">
            <a href="./docs/img/photo.png" target="_blank" rel="author">
                <img src="https://avatars2.githubusercontent.com/u/36519478?s=460&v=4" style="border-radius: 10%; min-width: 100px;" alt="Israel Laguan's Photo" width="200px">
            </a>
            <h2>
                <a href="https://israel-laguan.github.io/" target="_blank" rel="author">
                    Israel Laguan
                </a>
            </h2>
        </div>
    </td>
    <td>
        <div align="center">
            <a href="mailto:israellaguan@gmail.com" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/message-squared.png" style="border-radius: 10%" alt="My GitHub" height="45px">
                <h3>
                    Email me to 
                    <a href="mailto:israellaguan@gmail.com">
                        israellaguan@gmail.com
                    </a>
                </h3>
            </a>
            <a href="https://www.linkedin.com/in/israellaguan/" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="My Linkedin" height="45px">
                <h3>
                    Connect to my Linkedin
                </h3>
            </a>
            <a href="https://github.com/Israel-Laguan" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" 
			style="border-radius: 10%" alt="My GitHub" height="45px"
		>
                <h3>
                    Check my GitHub Profile
                </h3>
            </a>
        </div>
    </td>
  </tr>
</table> 

## Contributing

[![contributions welcome][contributions-welcome]][issues-url]

🤝 Contributions, issues and feature requests are welcome!
Feel free to check the [issues page][issues-url]. Be sure to review the [contributing guidelines](./docs/CONTRIBUTING.md).

Happy programming :smiley: :v:

## Show your support

🤗 Give a ⭐️ if you like this project!

Icons from:

[![Icons8][icons8-logo]][Icons8] Icons8

## License

[![License][badge-apache]][apache-license]

📝 This project is licensed under the [Apache 2](LICENSE)\
Feel free to fork this project and improve it

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Israel-Laguan/parrot-echo?style=for-the-badge
[contributors-url]: https://github.com/Israel-Laguan/parrot-echo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Israel-Laguan/parrot-echo?style=for-the-badge
[forks-url]: https://github.com/Israel-Laguan/parrot-echo/network/members
[stars-shield]: https://img.shields.io/github/stars/Israel-Laguan/parrot-echo?style=for-the-badge
[stars-url]: https://github.com/Israel-Laguan/parrot-echo/stargazers
[issues-open-shield]: https://img.shields.io/github/issues/Israel-Laguan/parrot-echo?style=for-the-badge
[issues-url]: https://github.com/Israel-Laguan/parrot-echo/issues
[issues-closed-shield]: https://img.shields.io/github/issues-closed/Israel-Laguan/parrot-echo?style=for-the-badge
[badge-framework]: https://img.shields.io/badge/express.js-v4.x-9cf?style=for-the-badge
[framework-url]: https://expressjs.com/
[contributions-welcome]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge
[badge-license]: https://img.shields.io/:license-mit-blue.svg?style=for-the-badge
[javascript]: https://img.shields.io/badge/JAVASCRIPT-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript
[nodejs]: https://img.shields.io/badge/node.js-V14.x-339933?style=for-the-badge&logo=node.js
[heroku]: https://img.shields.io/badge/Hosting-heroku-430098?style=for-the-badge&logo=heroku
[badge-apache]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge
[apache-license]: https://opensource.org/licenses/Apache-2.0
[Icons8]: https://icons8.com/
[icons8-logo]: https://img.icons8.com/fluent/20/000000/icons8-new-logo.png
[live]: https://parrot-echo-server.herokuapp.com/
[localhost:8000]: http://localhost:8000/
[badge-standard]: https://cdn.rawgit.com/standard/standard/master/badge.svg
[standard-style]: https://github.com/standard/standard
[localhost:8000]: http://localhost:8000
