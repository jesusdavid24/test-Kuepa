# Backend test-kuepa 💻

## Overview :writing_hand:
The backend of our instant messaging application serves as the core engine handling user authentication and real-time communication through WebSocket technology. Built with Node.js and Express, it ensures robust security measures by enforcing user login and validating tokens for accessing chat functionalities.

## Technologies Utilized:
Node.js: Powering the backend, Node.js provides a scalable and efficient runtime environment for executing JavaScript code.

Express.js: Leveraging the minimalistic and flexible web framework, Express.js facilitates the development of RESTful APIs for user authentication and other backend functionalities.

WebSocket: Implementing real-time bidirectional communication, WebSocket enables instant message delivery between users, fostering a seamless chatting experience.

TypeScript: Enhancing code maintainability and scalability, TypeScript adds static typing capabilities to JavaScript, reducing runtime errors and improving developer productivity.

## Authentication Mechanism:
Login Requirement: Users are required to log in before accessing the chat functionalities. This process ensures accountability and enhances security by associating messages with authenticated users.

Token-based Authentication: Upon successful login, users are issued a token that serves as proof of authentication. This token is required to access protected endpoints and participate in chat sessions.

## Backend Architecture:
RESTful API: The backend exposes a set of RESTful endpoints for user authentication, user management, and chat-related operations. These endpoints adhere to standard HTTP methods and provide a clear and consistent interface for frontend interaction.

WebSocket Integration: WebSocket endpoints are implemented to establish persistent connections between clients and the server, facilitating real-time message exchange without the overhead of HTTP polling.

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org) Node >= 18.15 LTS, npm >= 9.5.x - Install with Volta.sh

## Express Router and Routes

| Route            | HTTP Verb | Route Middleware | Description           |
| ---------------- | --------- | ---------------- | --------------------- |
| /api/healthcheck | GET       |                  | Show a simple message |
| /api/user        | GET       |                  | Get list of users     |
| /api/user        | POST      |                  | Creates a new users   |

## Usage

The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a note or log in, here we have some examples.

### Authentication **user** `/auth`

Request Body:

```json
{
	"email": "jdbv2524@gmail.com",
	"password": "12345"
}
```

Response:

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTdjMDA4MWNjOTc4NmJkYmIyODVhNCIsIm5hbWUiOiJKZXN1cyBCcmF2byIsImVtYWlsIjoiamRidjI1MjRAZ21haWwuY29tIiwicm9sZSI6IlNUVURFTlQiLCJpYXQiOjE3MTI4MzkzODksImV4cCI6MTcxMjg0Mjk4OX0.ucmNHgzAUCB6YFkDf3Mx6kt8nOfdjsDVpTIoamLqGB4",
	"userLogged": {
		"name": "Jesus Bravo",
		"role": "STUDENT",
		"email": "jdbv2524@gmail.com",
		"recoveryToken": null
	}
}
```

### Basic example **Create User** `/api/user`

Para todos los usuarios que se registren desde el frontend, tendrán por defecto el "role"="STUDENT". Para crear usuarios con "role"="MODERATOR", solo se pueden crear directamente con herramientas como Insomnia o Postman, ya que por motivos de seguridad, nadie desde el frontend puede crear un usuario con "role"="MODERATOR".


```json
{
	"name": "jesus bravo",
	"email": "j529904@gmail.com",
	"userName": "jesus24",
  "role": "MODERATOR",
	"password": "12345"
}
```

Request Body:

```json
{
	"name": "jesus bravo",
	"email": "j529904@gmail.com",
	"userName": "jesus24",
	"password": "12345"
}
```

Response:

```json
{
	"message": "user register successfully, please verifry account",
	"profile": {
		"name": "jesus bravo"
	}
}
```

1. Clone the repository:
```shell
git clone https://github.com/jesusdavid24/test-Kuepa.git
  ```
2. Navigate to the project directory:
```shell
cd test-kuepa
 ```
3. Install the dependencies:
```shell
 npm install
  ```
4. create an .env file in the root of the project and add the following data:

I must clarify that when a user is created an email is sent to your registered email and you must confirm the account. This email is a test email, I only created it for the test and there is no problem to use it.

For the database we used ORM prisma with mongodb. I created a test cluster and in the environment variables I leave the exact address of my cluster, in case it does not work, it is necessary to go to mongo atlas and create a new cluster. After creating it, go to the part that says connection and there it gives you a link to mongo compass, I used that one, but you can use the one you want.

```shell
  PORT=3005
  DATABASE_URL=mongodb+srv://jbravov:hsgt32ycy0x6VVuv@kuepa.vxbsmv8.mongodb.net/dbkuepa
  JWT_SECRET=secret
  SMTP_SERVER=smtp.gmail.com
  SMTP_PORT=465
  SMTP_USER=testkuepa@gmail.com
  SMTP_PASSWORD=mxlizgfazpeytqck
  BASE_URL_FRONT=http://localhost:5173
  ```
5. Start the application: 
```shell
 npm run dev
  ```

## Authors 👊

This project was created by [jesusdavid24](https://github.com/jesusdavid24)

## License

[MIT](LICENSE)
