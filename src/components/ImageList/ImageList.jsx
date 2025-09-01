"use client"
import ListItem from "./ListItem/ListItem"
import style from './imageList.module.css'
import { motion } from "framer-motion"
export const Motion = {imageList: motion.div}

export default function ImageList({items = [{title: "", image: "", description: "", alignText: "left"}]}) {
 const fadeUp = {
  visible: {
   opacity: 1,
   translateY: 0,
   transition: {
    delay: 0.66
   }
  },
  hidden: {
   opacity: 0,
   translateY: "5px"
  }
 }

 const key = {value: 0}

 return (
  <>
   <Motion.imageList className={style.imageList} initial="hidden" animate="visible" variants={fadeUp}>

    {items.map(item => (
     <ListItem key={key.value++} title={item.title} image={item.image} 
      description={item.description} alignText={item.alignText}/>
    ))}

   </Motion.imageList>
  </>
 )
}