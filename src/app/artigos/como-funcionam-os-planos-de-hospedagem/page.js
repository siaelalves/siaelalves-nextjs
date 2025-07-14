import Title from "../../../components/Title/Title"
import ImageList from '../../../components/ImageList/ImageList'
import Paragraph from '../../../components/Paragraph/Paragraph'
import blog from "../../../assets/interface/website-blog-option.svg"
import landingPage from '../../../assets/interface/website-landingpage-option.svg'
import institution from '../../../assets/interface/website-institutional-option.svg'
import catalogue from '../../../assets/interface/website-priceCatalogue-option.svg'
import gallery from '../../../assets/interface/website-gallery-option.svg'
import FlatButton from "../../../components/FlatButton/FlatButton"
import style from './page.module.css'
import Metadata from "../../../components/Metadata/Metadata"

export const metadata = {
 title: "Como funcionam os planos de hospedagem - Siael Alves",
 description: "Entenda melhor como os planos de hospedagem funcionam e calcule o custo do seu site antes de criá-lo! Entre em contato comigo para fazer um orçamento",
 author: "Siael Alves",
 creator: "Siael Alves",
 thumbnail: "",
 url: "https://siaelalves.com.br/artigos/como-funcionam-os-planos-de-hospedagem",
 metadataBase: new URL('https://siaelalves.com.br'),
 icons: {
  icon: "favicon.svg"
 },
 alternates: {
  canonical: "https://siaelalves.com.br/artigos/como-funcionam-os-planos-de-hospedagem"
 },
 openGraph: {
  title: "Como funcionam os planos de hospedagem - Siael Alves",
  description: "Entenda melhor como os planos de hospedagem funcionam e calcule o custo do seu site antes de criá-lo! Entre em contato comigo para fazer um orçamento",
  type: 'website',
  publishedTime: '2025-07-14T14:20:00.000Z',
  authors: ["Siael Alves"],
 }
};

export default function Page() {
 const WhatsAppLink = "https://api.whatsapp.com/send?phone=5532991223016&text=Ol%C3%A1%21%20Preciso%20conversar%20com%20voc%C3%AA%20sobre%20meu%20novo%20site%21"

 return (
  <>
   <article className={style.content}>
    <Title title={"Como funcionam os planos de hospedagem"}/>
    <Paragraph text="Se você chegou aqui é porque já tem certeza de que quer um site para a sua empresa. Para ajudar 
    você a calcular quanto vai custar criar o seu site, eu preparei esta explicação para você não se perder!"/>

    <Paragraph text="Primeiramente, vamos definir o signifcado de alguns termos que vão ajudar você daqui para frente."/>

    <Paragraph text="[[[Este artigo está incompleto]]]"/>

    <div className={style.buttonLine}>
     <FlatButton label={"Quero um Site"} icon="socialwhatsapp-icon-dark" path={WhatsAppLink} title={"Entrar em contato pelo WhatsApp"} type="primary"/>
     <FlatButton label={"Outras dúvidas"} icon="" path={"/artigos"} title={"Ver lista de artigos"} type="terciary"/>
    </div>
   </article>
  </>
 )
}