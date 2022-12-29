import clsx from "clsx";
import React from "react";
import style from './areas.module.scss'
import { CategoryNav } from "./CategoryNav";
import { PostContainer } from "./Post";
import { PostAside } from "./PostAside";

interface CategoryProps {
 categoryId?: string,
 children?: React.ReactNode
}



export const CategoryPage = (props: CategoryProps) => {
 const { categoryId } = props
 return (
  <section className={style.areasSection}>
   <div style={{ position: 'relative', zIndex: 2 }}>
    <CategoryNav activeId={categoryId} />
    <div className={clsx(style.areasPostContainer, 'container')}>
     <PostAside />
     <PostContainer>
      {props.children}
     </PostContainer>
    </div>
   </div>
  </section>
 )
}