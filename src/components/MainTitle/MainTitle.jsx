import style from './mainTitle.module.css'

export default function MainTitle() {
 return (
  <>
   <h1 className={style.title}>
    <div className={style.line}>Programador &</div>
    <div className={style.line + " " + style.second}>Web Designer</div>
   </h1>
  </>
 )
}