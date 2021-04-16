## Example of REST backend server on `Node.js` by [Ulbi TV Youtube video](https://youtu.be/tKM44vPHU0U)

1. `# npm init -y`
1. `# npm i express`
1. Edit `package.json`:
    ```json
    "scripts": {
        "start": "node index.js"
    ```
1. Add to `package.json` for use `export/import`:
    ```json
    "type": "module",
    ```
1. For automate server restart by code changed:

    `# npm i -D nodemon`

    and in `package.json`:

    ```js
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
      },
    ```
1. MongoDB
   1. db_user:user_password_2021
   2. `# npm i mongoose` - ORM for MongoDB
   3. Create model `Post.js` by `mongoose` ORM
2. Create `router.js` for CRUD requests
3. Create `PostController.js` for logic
4. Create `PostService.js`
5. Add `picture` parameter for post
   1. `# npm i express-fileupload`
   2. Create `FileService.js`
   3. `# npm i uuid` for file names generate
   4. Create `static` folder for save uploaded JPG
   5. Add `express.static()` middleware for handling static files (saved pictures) by server:
        ```javascript
        app.use(express.static('static'))
        ```
        and now had an opportunity get pictures from `static` folder:
        ```
        http://localhost:5000/9fad05ea-e748-406d-b9f8-733ea09bd814.jpg
        ```