import FlatButton from "../../../FlatButton/FlatButton"
import Paragraph from "../../../Paragraph/Paragraph"
import Title from "../../../Title/Title"
import Metadata from "../../../Metadata/Metadata"
import creativitySymbol from '/src/assets/interface/creativity-symbol.svg'
import responsibilitySymbol from '/src/assets/interface/responsibility-symbol.svg'
import enduranceSymbol from '/src/assets/interface/endurance-symbol.svg'
import style from './content.module.css'
import ImageList from "../../../ImageList/ImageList"

export default function Content() {
 const WhatsAppLink = "https://api.whatsapp.com/send?phone=5532991223016&text=Ol%C3%A1%21%20Preciso%20conversar%20com%20voc%C3%AA%20sobre%20meu%20novo%20site%21"

 return (
  <>
   <Metadata title={"Quem é Siael Alves"}
   author={"Siael Alves"} description={"O que acha de fazer um orçamento para o seu site? Entre aqui e me conheça um pouco mais"}
   path={"https://siaelalves.com.br/quem-sou-eu"}
   siteName={"Siael Alves"} thumbnail={""}/>

   <Title title={"Quem é Siael Alves"}/>
   <Paragraph text="Sou Programador e Web Designer desde 2023. 
    Comecei a estudar programação aos 13 anos, mas me apaixonei pela programação Web quando criei meu 
    primeiro website do zero. Durante esse projeto, percebi que é necessário muito mais do que 
    linhas e códigos para fazer um site ir para o ar. Desde então, eu guio meus trabalhos com esses 
    3 princípios:"/>
   <ImageList items={
    [
     {
      title: "Criatividade",
      image: creativitySymbol,
      description: "Para que o site seja único e se destaque",
      alignText: "center"
     },
     {
      title: "Responsabilidade",
      image: responsibilitySymbol,
      description: "Para cumprir minhas promessas e fazer tudo com qualidade",
      alignText: "center"
     },
     {
      title: "Perseverança",
      image: enduranceSymbol,
      description: "Para aceitar novos desafios e vencê-los",
      alignText: "center"
     }
    ]
   }
   />
   <Paragraph text="Com esses 3 princípios sempre em mente, quero firmar com você um acordo sólido e 
   confiável, com o único objetivo de trazer à vida o website com o qual você tanto sonha!"/>
   <div className={style.buttonLine}>
    <FlatButton label={"Quero um Site"} path={WhatsAppLink} title={"Entrar em contato pelo WhatsApp"} type="primary"/>
    {/* <FlatButton label={"Conheça alguns dos meus trabalhos"} path={"/meus-trabalhos"} title={"Ir para página Meus Trabalhos"} type="terciary"/> */}
   </div>
  </>
 )
}