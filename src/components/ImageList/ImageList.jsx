import ListItem from "./ListItem/ListItem"
import style from './imageList.module.css'

export default function ImageList({items = [{title: "", image: "", description: "", alignText: "left"}]}) {
 const key = {value: 0}

 return (
  <>
   <div className={style.imageList}>

    {items.map(item => (
     <ListItem key={key.value++} title={item.title} image={item.image} 
      description={item.description} alignText={item.alignText}/>
    ))}

   </div>
  </>
 )
}