import Link from 'next/link'
import style from './flatButton.module.css'

export default function FlatButton({type="primary", label, path, title}) {
 if (type == "primary") {

  if (path.startsWith("/") || path.startsWith("https")) {

   return (
    <Link href={path} title={title}>
     <button className={style.primary + " " + style.light}>{label}</button>
    </Link>
   )

  } else {
   
   return (<button className={style.primary + " " + style.light} title={title}>{label}</button>)

  }

 }

 if (type=="secondary") {

  if (path.startsWith("/") || path.startsWith("https")) {

   return (
    <Link href={path} title={title}>
     <button className={style.secondary + " " + style.light}>{label}</button>
    </Link>
   )
   
  } else {
   
   return (<button className={style.secondary + " " + style.light} title={title}>{label}</button>)

  }

 }

 if (type == "terciary") {

  if (path.startsWith("/") || path.startsWith("https")) {

   return (
    <Link href={path} title={title}>
     <button className={style.terciary + " " + style.light}>{label}</button>
    </Link>
   )
   
  } else {
   
   return (<button className={style.terciary + " " + style.light} title={title}>{label}</button>)

  }

 }
}