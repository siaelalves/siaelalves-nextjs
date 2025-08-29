"use client"
import style from './title.module.css'
import { motion } from "framer-motion"
export const Motion = {title: motion.h2}

export default function Title({title}) {
 const fadeUp = {
  visible: {
   opacity: 1,
   translateY: 0
  },
  hidden: {
   opacity: 0,
   translateY: "7px"
  }
 }

 return (
  <Motion.title className={style.title} initial="hidden" animate="visible" variants={fadeUp}>{title}</Motion.title>
 )
}