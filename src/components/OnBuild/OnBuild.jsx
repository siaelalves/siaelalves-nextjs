import { motion } from "framer-motion"
import style from './onBuild.module.css'

export default function OnBuild() {
 const blink = {
  hidden: {
   opacity: 0
  },
  visible: {
   opacity: 1,
   repeat: Infinity
  }
 }

 return (
  <motion.div initial={"hidden"} animate={"visible"} variants={blink} className={style.onBuild}>
   Em construção
  </motion.div>
 )
}