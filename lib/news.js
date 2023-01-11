import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/news')

export function getAllPostIds() {
 const fileNames = fs.readdirSync(postsDirectory);

 return fileNames.map((fileName) => {
  return {
   params: {
    id: fileName.replace(/\.md$/, ''),
   },
  };
 });
}
