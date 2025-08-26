import Paragraph from "@/components/Paragraph/Paragraph";
import Title from "@/components/Title/Title";
import Link from "next/link";
import style from "./page.module.css"
import { Children } from "react";
import ListItem from "@/components/ListItem/ListItem";
import FlatButton from "@/components/FlatButton/FlatButton";

export const metadata = {
 title: "Artigos - Siael Alves",
 description: "Tire aqui as suas dúvidas sobre o processo de criação de sites, como funcionamento de hospedagem, compra de domínio, tipos de site e outras coisas",
 author: "Siael Alves",
 creator: "Siael Alves",
 thumbnail: "",
 url: "https://siaelalves.com.br/artigos",
 metadataBase: new URL('https://siaelalves.com.br'),
 icons: {
  icon: "favicon.svg"
 },
 alternates: {
  canonical: "https://siaelalves.com.br/artigos"
 },
 openGraph: {
  title: "Artigos - Siael Alves",
  description: "Tire aqui as suas dúvidas sobre o processo de criação de sites, como funcionamento de hospedagem, compra de domínio, tipos de site e outras coisas",
  type: 'website',
  publishedTime: '2025-07-14T14:15:00.000Z',
  authors: ["Siael Alves"],
 }
};

export default function Articles({children}) {
 const WhatsAppLink = "https://api.whatsapp.com/send?phone=5532991223016&text=Ol%C3%A1%21%20Preciso%20conversar%20com%20voc%C3%AA%20sobre%20meu%20novo%20site%21"
 
 return(
  <>
   <article className={style.content}>
    <Title title="Dúvidas comuns"/>

    <Paragraph text="Veja abaixo uma lista de artigos que responderão suas dúvidas antes de começar a criar 
    seu website:"/>

    <ListItem items={
     [
      <Link className="link" href="/artigos/como-funcionam-os-planos-de-hospedagem">Como funcionam os planos de hospedagem</Link>,
      <Link className="link" href="/artigos/conheca-os-diferentes-tipos-de-site">Conheça os diferentes tipos de site</Link>
     ]
    }/>

    <Paragraph text="Caso não tenha encontrado sua dúvida aqui, fique à vontade para entrar em contato. Eu 
    ajudarei você por todo o processo até que seu site fique pronto!" />

    <div className={style.buttonLine}>
     <FlatButton label={"Tenho mais dúvidas"} icon="socialwhatsapp-icon-dark" path={WhatsAppLink} title={"Entrar em contato pelo WhatsApp"} type="primary"/>
    </div>

   </article>
  </>
 )
}