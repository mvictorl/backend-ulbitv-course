import Post from '../Post.js'
import fileService from './FileService.js'

class PostService {
	async create(post, pic) {
		const fileName = fileService.saveFile(pic)
		const createdPost = await Post.create({ ...post, picture: fileName })
		return createdPost
	}

	async getAll() {
		const posts = await Post.find()
		return posts
	}

	async getPost(id) {
		if (!id) {
			throw new Error('ID Post are absent')
		}
		const post = await Post.findById(id)
		return post
	}

	async update(post) {
		if (!post._id) {
			throw new Error('ID Post are absent')
		}
		const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
			new: true
		})
		return updatedPost
	}

	async delete(id) {
		if (!id) {
			throw new Error('ID Post are absent')
		}
		const post = await Post.findByIdAndDelete(id)
		return post
	}
}

export default new PostService()
