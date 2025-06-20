import style from './listItem.module.css'

export default function ListItem({title, image, description, alignText = "left"}) {
 return (
  <>
   <div className={style.item}>
    <h2 className={style.title}>{title}</h2>
    <img className={style.image} src={image.src}/>
    <p  className={style.description + " " + style["align-text-" + alignText]}>{description}</p>
   </div>
  </>
 )
}