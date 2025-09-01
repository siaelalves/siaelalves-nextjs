"use client"
import style from './listItem.module.css'
import { motion } from "framer-motion"
export const Motion = {item: motion.li}

export default function ListItem({items=[]}) {
 const fadeRight = {
  visible: {
   opacity: 1,
   translateY: 0,
   transition: {
    delay: 0.25
   }
  },
  hidden: {
   opacity: 0,
   translateX: "-5px"
  }
 }

 const key = {value: 0}

 return (
  <>
   <ul className={style.list}>
    {items.map(item => (
     <Motion.item key={key.value++} className={style.item} initial="hidden" animate="visible" variants={fadeRight}>{item}</Motion.item>
    ))}    
   </ul>
  </>
 )
}