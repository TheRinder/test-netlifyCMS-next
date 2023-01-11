import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const newsDirectory = path.join(process.cwd(), 'content/news')

export function getAllPostIds() {
  const fileNames = fs.readdirSync(newsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getAllNews() {
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