import React from "react";
import style from './areas.module.scss'
import { CategoryNav } from "./CategoryNav";
import { PostContainer } from "./Post";
import { PostAside } from "./PostAside";

interface CategoryProps {
 categoryId?: string
}



export const CategoryPage = (props: CategoryProps) => {
 const { categoryId } = props
 return (
  <section>
   <CategoryNav activeId={categoryId} />
   <div className={style.areasPostContainer}>
    <PostAside />
    <PostContainer />
   </div>
  </section>
 )
}