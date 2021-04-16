import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
// import sqlite3 from 'sqlite3'

import router from './router.js'

// import Post from './models/Posts/Post.js'

const PORT = 5000
const DB_URL =
	'mongodb+srv://db_user:user_password_2021@cluster0.hdwdg.mongodb.net/backendCourseDB?retryWrites=true&w=majority'
const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)
// app.use('/users', userRouter)

// app.post('/', async (request, response) => {
// 	try {
// 		const { author, title, content } = request.body
// 		const post = await Post.create({ author, title, content })
// 		response.status(200).json(post)
// 	} catch (e) {
// 		response.status(500).json(e)
// 	}
// })

async function startApp() {
	try {
		// const db = new sqlite3.Database('./db/db.db', err => {
		// 	if (err) {
		// 		console.error(err.message)
		// 	}
		// 	console.log('Connected to the database.')
		// })
		await mongoose.connect(DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		app.listen(PORT, () => {
			console.log(`Server started on ${PORT} port...`)
		})
	} catch (e) {
		console.error(e)
	}
}

startApp()
