import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const newsDirectory = path.join(process.cwd(), 'content/news')

export function getAllNews() {
  if(fs.existsSync(newsDirectory)){
    const fileNames = fs.readdirSync(newsDirectory);
  
    const allNews = fileNames.map((fileName) => {
      const fullPath = path.join(newsDirectory, `${fileName}`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      return {
        data: matterResult.data,
        content: matterResult.content
      }
    })
  
    return JSON.stringify(allNews);
  }
  return JSON.stringify([]);
}