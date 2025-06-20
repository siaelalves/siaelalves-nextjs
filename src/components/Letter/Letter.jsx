import style from './letter.module.css'

export default function Letter({letter, id}){
 return (
  <div id={"letter-" + id} className={style.letter}>{letter}</div>
 )
}