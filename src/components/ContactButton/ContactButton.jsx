import style from './contactButton.module.css'

export default function ContactButton({label}) {
 return (
  <button className={style.contact}>{label}</button>
 )
}