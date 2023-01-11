import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/news')

export const listNews = () => {
 const fileNames = fs.readdirSync(postsDirectory)
 return fileNames.map(fileName => {
  return {
   params: {
    slug: fileName.replace(/\.md$/, '')
   }
  }
 })
}