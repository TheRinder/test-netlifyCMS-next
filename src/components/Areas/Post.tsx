import React from "react";
import style from './areas.module.scss'

export const PostContainer = ({ children }: { children?: React.ReactNode }) => {
 return (
  <div className={style.PostContainer}>
   <div className={style.PostContent}>
    {children}
   </div>
  </div>
 )
}