'use client'
import style from './header.module.css'
import MainTitle from "../MainTitle/MainTitle";
import FlatButton from '../FlatButton/FlatButton';

import { motion } from "framer-motion"
export const Motion = { name: motion.h2, info: motion.div, line: motion.div, buttonLine: motion.div }

export default function Header() {
 const fadeIn = {
  hidden: {
   opacity: 0
  },
  visible: {
   opacity: 1
  }
 }

 const draw = {
  hidden: {
   width: 0
  },
  visible: {
   width: "75vw"
  }
 }

 return (
  <header className={style.header}>    
   <div className={style.title}>
    <Motion.name className={style.name} initial="hidden" animate="visible" variants={fadeIn}>SIAEL ALVES</Motion.name>
    <MainTitle/>
   </div>
   <Motion.line className={style.line} initial="hidden" animate="visible" variants={draw}></Motion.line>
   <Motion.info className={style.info} initial="hidden" animate="visible" variants={fadeIn}>Sites Institucionais, Landing Pages, Blogs e Catálogos On-line</Motion.info>
   <Motion.buttonLine className={style.buttonLine} initial="hidden" animate="visible" variants={fadeIn}>
    <FlatButton type={"primary"} label={"Conheça meu trabalho"} path={"/quem-sou-eu"} title="Ir para próxima página"/>
    <FlatButton type={"terciary"} label={"Que site devo escolher"} path={"/duvidas/conheca-os-diferentes-tipos-de-site"} title="Ler artigo Conheça os diferentes tipos de site"/>
   </Motion.buttonLine>
   
   {/* <img  ={style.background} src="/src/assets/background/header-background-1.jpg"/> */}
  </header>
 )
}