import Link from 'next/link'
import style from './flatButton.module.css'

export default function FlatButton({type="primary", icon="", label, path, title}) {
 const typeList = ["primary", "secondary", "terciary"]

 if (!typeList.includes(type)) {
  console.error("Tipo de botão indisponível. Permitido apenas os tipos: " + typeList.join(", ") + ". Alterado para \"primary\".")
  type = "primary"
 }

 if (icon != "") {
  icon = (<span className={style.icon + " " + icon}></span>)
 }

 if (path.startsWith("/") || path.startsWith("https")) {

  return (
   <Link href={path} title={title}>
    <button className={style[type] + " " + style.light}>{icon}{label}</button>
   </Link>
  )

 } else {
  
  return (<button className={style.primary + " " + style.light} title={title}>{label}</button>)

 }

}