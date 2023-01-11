import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/services')

export function getSortedPostsData() {
 // Get file names under /posts
 const fileNames = fs.readdirSync(postsDirectory)
 const allPostsData = fileNames.map(fileName => {
  // Remove ".md" from file name to get id
  const slug = fileName.replace(/\.md$/, '')

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
   slug,
   ...matterResult.data
  }
 })
 // Sort posts by date
 return allPostsData.sort((a, b) => {
  if (a.date < b.date) {
   return 1
  } else {
   return -1
  }
 })
}

export function getAllPostIds(serviceId) {
 const fileNames = fs.readdirSync(postsDirectory)
 return fileNames.map(fileName => {
  return {
   params: {
    categoryid: serviceId,
    slug: fileName.replace(/\.md$/, '')
   }
  }
 })
}

export function getPostData(slug) {
 const fullPath = path.join(postsDirectory, `${slug}.md`)
 const fileContents = fs.readFileSync(fullPath, 'utf8')

 // Use gray-matter to parse the post metadata section
 const matterResult = matter(fileContents)

 // Combine the data with the id
 return {
  slug,
  content: matterResult.content,
 }
}