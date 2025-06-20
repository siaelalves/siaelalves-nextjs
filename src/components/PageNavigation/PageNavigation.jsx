'use client'
import IconButton from '../IconButton/IconButton'
import HomeIcon from '../../assets/interface/home-icon.svg'
import style from './pageNavigation.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function PageNavigation() {
 const router = useRouter()

 return (
  <>
   <nav className={style.pageNav}>
    <div className={style.box}>
     <button className={style.navButton} onClick={() => {router.back()}}>
      <IconButton url="/" icon="arrows-arrow-left2" title="Voltar"/>
     </button>
    </div>

    <div className={style.box}>
     <Link href="/" title="Início">
      <button className={style.navButton}>
       <img src={HomeIcon.src}/>
       <IconButton url="/" icon="nav-home-icon" title="Início"/>
      </button>
     </Link>
    </div>

    <div className={style.box}>
     <button className={style.navButton} onClick={() => {router.forward()}}>
      <IconButton url="/" icon="arrows-arrow-right2" title="Próxima"/>
     </button>
    </div>
   </nav>
  </>
 )
}