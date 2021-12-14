# City Pollution

A social network where people can share the quality of the air in their city!

## Mainly Built With

- [Node](https://nodejs.org/it/)
- [Express](https://expressjs.com/it/)

## Secondary Tools

- [Sequelize](https://sequelize.org/)
- [Multer](https://www.npmjs.com/package/multer)
- [Sass](https://sass-lang.com/)

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. 
See deployment for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push. 

- [Node](https://nodejs.org/it/download/)
- [A Database (I've used MySQL)](https://towardsdatascience.com/top-10-databases-to-use-in-2021-d7e6a85402ba)

### Installing

A step by step series of examples that tell you how to get a development
environment running

1. Clone the repo and cd to its root directory
   ```sh
   git clone https://github.com/francescoparra/city_pollution

   cd city_pollution-main
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Copy ".env.example" from the root folder and rename the copy to ".env".
   ```sh
   cp .env.example .env
   ```
5. Create an empty database: depending on your setup and system this may vary. The name doesn't matter, I called mine "city_pollution" for consistency.

6. Update .env with your database connection settings in order to give the app access to it. In the .env file fill in the options with your database credentials, for the supported dialects check this link [Supported Dialects](https://sequelize.org/master/manual/getting-started.html):

   ```sh
   PORT = Your Port
   USER = Your Username
   PASSWORD = Your Password
   DATABASE = Your Database Name
   HOST = Your Host
   DIALECT = Your Database Dialect 
   ```

8. Run migrations in your database with the migrations file or with sequelize:
   ```sh
   sequelize db:migrate
   ```

9. Run the server and open the url you are serving it to on your browswer, you can see the link on the terminal.

    ```sh
    npm test
    ```

## Usage

When you start you will find yourself on the home page. 

Create a new post, then you can edit or delete it.

## Authors

  - **Francesco Parra**
    [GitHub](https://github.com/francescoparra)
    [Linkedin](https://www.linkedin.com/in/francescoparra/)


