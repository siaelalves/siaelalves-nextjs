import { Children } from 'react'
import style from './paragraph.module.css'

export default function Paragraph({text=""}) {
 return (
  <>
   <p className={style.text}>{text}</p>
  </>
 )
}