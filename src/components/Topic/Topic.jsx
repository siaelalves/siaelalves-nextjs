"use client"
import style from './topic.module.css'
import { motion } from "framer-motion"
export const Motion = {topic: motion.h3}

export default function Topic({topic, children}) {
 const fadeUp = {
  visible: {
   opacity: 1,
   translateY: 0,
   transition: {
    delay: 0.1
   }
  },
  hidden: {
   opacity: 0,
   translateY: "5px"
  }
 }

 return (
  <Motion.topic className={style.topic} initial="hidden" animate="visible" variants={fadeUp}>{(topic) ? (topic) : (children)}</Motion.topic>
 )
}