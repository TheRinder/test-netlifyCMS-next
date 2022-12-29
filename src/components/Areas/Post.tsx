import React from "react";
import style from './areas.module.scss'
// import { attributes, react as PostContent } from '../../../content/blog/business-planning.md'


export const PostContainer = ({ children }: { children?: React.ReactNode }) => {
 return (
  <div className={style.PostContainer}>
   <div className={style.PostContainerBg}>
    {children}
   </div>
  </div>
 )
}