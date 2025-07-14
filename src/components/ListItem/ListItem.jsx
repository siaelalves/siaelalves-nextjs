import { Children } from 'react'
import style from './listItem.module.css'

export default function ListItem({items=[]}) {
 const key = {value: 0}

 return (
  <>
   <ul className={style.list}>
    {items.map(item => (
     <li key={key.value++} className={style.item}>{item}</li>
    ))}    
   </ul>
  </>
 )
}