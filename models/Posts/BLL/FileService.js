import uuid from 'uuid'
import * as path from 'path'

class FileService {
	saveFile(file) {
		try {
			const fileName = uuid() + '.jpg'
			const filePath = path.resolve('static', fileName)
			file.mv(filePath)
			return fileName
		} catch (e) {
			console.error(e)
		}
	}
}

export default new FileService()
