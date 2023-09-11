# Express-Sequelize-Desserts (Desserts Database)
This is an in-class demo of how to incorporate a relational database into a simple Node.js/Express website.

## v.1
* `mkdir express-sequelize`
* `cd express-sequelize`
* `touch .gitignore app.js database.js Dessert.js README.md`
* Add `node_modules` to `.gitignore`
* Add code to `database.js`
* Add code to `Dessert.js`
* Add code to `app.js`
* Run the code with `node app` (should return error)

### Install dependencies
* `npm install express sequelize sqlite3`
* Run again with `node app`
* Note that the database (`desserts.sqlite`) was created

### Install SQLite viewer
* Open Extensions in VS Code
* Search for 'SQLite Viewer'
* Install and restart VS Code if necessary

### Review the database
* View the DB in SQLite Viewer
* Note the 'desserts' table

## v.2

### Add data to the database
* Add express.json middleware and a **POST** route to the `app.js` file
* Start the app with `node app`
* In Postman, send a POST request to https://localhost:3000/desserts
    * Choose Body
    * Choose 'raw' data
    * Select JSON datatype
```
{
    "name":"Apple Pie",
    "description":"An American classic"
}
```
* View the database in VS Code and note the new row

### Select data from the database
* Add a **GET** route to `app.js`
* Restart the application
* In Postman, open a new tab and send a GET request to https://localhost:3000/desserts

### Select a single row from the database
* Add a **GET** route with one parameter to `app.js`
* Restart the application
* In Postman, open a new tab and send a GET request to https://localhost:3000/desserts/1