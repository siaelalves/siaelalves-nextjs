import style from './menuBar.module.css'
import Link from 'next/link'

export default function MenuBar() {
 return (
  <>
   <nav className={style.menuBar}>
    <div className={style.box}>
     <a href="https://instagram.com/siaelalves" target="_blank" title="Ir para Instagram">
      <span className={style.icon + " " + "socialinstagram-icon"}></span>
      {/* <img className={style.icon} src={instagramIcon}/> */}
     </a>
    </div>
    <div className={style.box}>
     <a href="mailto:contato@siaelalves.com.br" target="_blank" title="Enviar e-mail para Siael">
     <span className={style.icon + " " + "socialemail-icon"}></span>
     </a>
    </div>
    <div className={style.box}>
     <a href="https://api.whatsapp.com/send?phone=5532991223016&text=Ol%C3%A1%21%20Preciso%20conversar%20com%20voc%C3%AA%20sobre%20meu%20novo%20site%21" 
     target="_blank" title="Ir para WhatsApp">
      <span className={style.icon + " " + "socialwhatsapp-icon"}></span>
     </a>
    </div>
    <div className={style.box}>
     <Link href={"/"} title='Início'>
      <h1 className={style.title}>SIAEL ALVES</h1>
     </Link>
    </div>
   </nav>
  </>
 )
}