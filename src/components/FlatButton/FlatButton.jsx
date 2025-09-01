"use client"
import Link from 'next/link'
import style from './flatButton.module.css'
import { motion } from "framer-motion"
export const Motion = {button: motion.button}

export default function FlatButton({type="primary", icon="", label, path, title}) {
 const fadeIn = {
  hidden: {
   opacity: 0
  },
  visible: {
   opacity: 1,
   transition: {
    delay: 0.80
   }
  }
 }

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
    <Motion.button className={style[type] + " " + style.light} initial="hidden" animate="visible" variants={fadeIn}>{icon}{label}</Motion.button>
   </Link>
  )

 } else {
  
  return (<Motion.button className={style.primary + " " + style.light} title={title} initial="hidden" animate="visible" variants={fadeIn}>{label}</Motion.button>)

 }

}