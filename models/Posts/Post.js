import mongoose from 'mongoose'

// Post Scheme (db's model)
const Post = new mongoose.Schema({
	author: { type: String, required: true },
	title: { type: String, required: true },
	content: { type: String, required: true },
	picture: { type: String }
})

export default mongoose.model('Post', Post)
