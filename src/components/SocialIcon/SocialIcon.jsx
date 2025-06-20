import style from './socialIcon.module.css'

export default function SocialIcon({name, color, href}) {
 return (
  <>
  <a href={href} target="_blank" title={"Ir para " + name}>
   <img className={style.icon} 
   src={'./src/assets/social/' + name + '-icon-' + color + '.svg'}/>
  </a>
  </>
 )
}