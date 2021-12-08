const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
let instance = null;

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_HOST,
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  } else {
    // console.log('db ' + connection.state);
  }
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }
  // READ
  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM reports ORDER BY createdAt DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  // CREATE
  async createPost(city, description, user, image) {
    try {
      const createdAt = new Date();
      const insertId = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO reports (city, description, user, image, createdAt) VALUES (?,?,?,?,?);";

        connection.query(query, [city, description, user, image, createdAt], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.insertId);
        });
      });
      return {
        id: insertId,
        city: city,
        description: description,
        user: user,
        image: image,
        createdAt: createdAt
      };
    } catch (error) {
      console.log(error);
    }
  }
  // DELETE
  async deletePost(id) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM reports WHERE id = ?";
        connection.query(query, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });
      return response === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  // UPDATE
  async patchPost(id, city) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const query = "UPDATE reports SET city = ? WHERE id = ?";

        connection.query(query, [city, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });
      return response === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  // Search
  async searchCity(city) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM reports WHERE city = ?;";
        connection.query(query, [city], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DbService;
