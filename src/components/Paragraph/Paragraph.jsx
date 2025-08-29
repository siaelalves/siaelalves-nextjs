"use client"
import style from './paragraph.module.css'
import { motion } from "framer-motion"
export const Motion = {paragraph: motion.p}

export default function Paragraph({text="", children}) {
 const fadeUp = {
  visible: {
   opacity: 1,
   translateY: 0,
   transition: {
    delay: 0.25
   }
  },
  hidden: {
   opacity: 0,
   translateY: "5px"
  }
 }

 return (
  <>
   <Motion.paragraph className={style.text} initial="hidden" animate="visible" variants={fadeUp}>{(text) ? (text) : (children)}</Motion.paragraph>
  </>
 )
}