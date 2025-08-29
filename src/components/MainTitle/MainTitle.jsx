import style from './mainTitle.module.css'
import { motion } from "framer-motion"
export const Motion = { title: motion.h1}

export default function MainTitle() {
 const fadeIn = {
  hidden: {
   opacity: 0
  },
  visible: {
   opacity: 1
  }
 }
 
 return (
  <>
   <Motion.title initial="hidden" animate="visible" variants={fadeIn} className={style.title}>
    <div className={style.line}>Programador &</div>
    <div className={style.line + " " + style.second}>Web Designer</div>
   </Motion.title>
  </>
 )
}