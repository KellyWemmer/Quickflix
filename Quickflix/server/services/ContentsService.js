import {dbContext} from "../db/DBContext.js"
import {logger} from "../utils/Logger.js"
import {Forbidden} from "../utils/Errors.js"

class ContentsService {
    async getContentById(id) {
        const res = await dbContext.Content.findById(id).populate('creator', 'name picture')//Do we want to populate creator name and picture?
        return res
    }
    async create (newContent){
        const content = await dbContext.Content.create(newContent)
        // await content.populate('creator', 'name picture')
        return content
    
    }
    async archive(contentId, userId) {       //TODO Hard delete
        const content = await this.getContentById(contentId)
        // @ts-ignore
        if (content.creatorId.toString() != userId)
        {throw new Forbidden('You can not delete this')}
        // @ts-ignore
        await content.remove()
        return 'content removed'
    
    }
    
    
}

export const  contentService = new ContentsService()