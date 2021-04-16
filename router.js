import Router from 'express'
import PostController from './models/Posts/Controller/PostController.js'

const router = new Router()

router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getPost)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router
