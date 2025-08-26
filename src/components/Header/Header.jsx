import style from './header.module.css'
import MainTitle from "../MainTitle/MainTitle";
import FlatButton from '../FlatButton/FlatButton';

export default function Header() {
 return (
  <header className={style.header}>    
   <div className={style.title}>
    <h2 className={style.name}>SIAEL ALVES</h2>
    <MainTitle/>
   </div>
   <div className={style.line}></div>
   <div className={style.info}>Sites Institucionais, Landing Pages, Blogs e Catálogos On-line</div>
   <div className={style.buttonLine}>
    <FlatButton type={"primary"} label={"Conheça meu trabalho"} path={"/quem-sou-eu"} title="Ir para próxima página"/>
    <FlatButton type={"terciary"} label={"Que site devo escolher"} path={"/duvidas/conheca-os-diferentes-tipos-de-site"} title="Ler artigo Conheça os diferentes tipos de site"/>
   </div>
   
   {/* <img  ={style.background} src="/src/assets/background/header-background-1.jpg"/> */}
  </header>
 )
}