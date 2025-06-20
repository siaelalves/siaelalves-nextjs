import Content from "../Content/Content"
import style from './article.module.css'

export default function Article({content}) {
 return (
  <>
  <article className={style.content}>
   <Content content={content}/>
  </article>
  </>
 )
}