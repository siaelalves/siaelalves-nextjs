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
 title: "Conheça os diferentes tipos de site",
 description: "Crio Sites Institucionais, Landing Pages, Blogs e Catálogos On-line. Entenda a diferença entre esses tipos de site. Entre em contato para fazer um orçamento",
 author: "Siael Alves",
 creator: "Siael Alves",
 thumbnail: "",
 url: "https://siaelalves.com.br/artigos/conheca-os-diferentes-tipos-de-site",
 metadataBase: new URL('https://siaelalves.com.br'),
 icons: {
  icon: "favicon.svg"
 },
 alternates: {
  canonical: "https://siaelalves.com.br/artigos/conheca-os-diferentes-tipos-de-site"
 },
 openGraph: {
  title: "Conheça os diferentes tipos de site - Siael Alves",
  description: "Crio Sites Institucionais, Landing Pages, Blogs e Catálogos On-line. Entenda a diferença entre esses tipos de site. Entre em contato para fazer um orçamento",
  type: 'website',
  publishedTime: '2025-06-20T10:29:00.000Z',
  authors: ["Siael Alves"],
 }
};

export default function Page() {
 const WhatsAppLink = "https://api.whatsapp.com/send?phone=5532991223016&text=Ol%C3%A1%21%20Preciso%20conversar%20com%20voc%C3%AA%20sobre%20meu%20novo%20site%21"

 return (
  <>
   <article className={style.content}>
    <Title title={"Conheça os diferentes tipos de site"}/>
    <Paragraph text="Você quer um site para a sua empresa, mas qual é o seu objetivo? Para cada resultado
    que você deseja, há um tipo de site adequado para atender suas necessidades. Veja abaixo os tipos de 
    site mais comuns e depois me diga se algum deles é o que você procura"/>
    <ImageList items={
     [
      {
       title: "Landing Page",
       image: landingPage,
       description: "Landing Page é um site que tem como objetivo divulgar um produto ou serviço para encontrar potenciais clientes, geralmente contendo um formulário para o visitante deixar seus dados. É o mais rápido de se criar e mais comum para captação de leads e novos clientes"
      },
      {
       title: "Blog",
       image: blog,
       description: "Blog é um tipo de site usado criar conteúdo na internet em formato de posts, que podem conter texto, imagem ou vídeo. O objetivo do blog é aproximar o leitor da marca ou do escritor através de um apelo mais pessoal e descompromissado. É o modelo mais adequado para quem deseja manter os clientes que já possuem"
      },
      {
       title: "Site Institucional",
       image: institution,
       description: "Um Site Institucional é o tipo de site usado por empresas para dar credibilidade a seus serviços, apresentar seu posicionamento no mercado e manter um ponto de comunicação com os clientes. O foco não é criação de conteúdo, mas dar sensação de estabilidade e profissionalismo para o negócio"
      },
      {
       title: "Catálogo On-Line",
       image: catalogue,
       description: "Um Catálogo é o tipo de site cujo objetivo é apenas exibir uma lista de produtos, preços e descrição, mas a compra é efetivada em outro site através de um link de afiliado ou entrando em contato direto com um vendedor"
      },
      {
       title: "Galeria",
       image: gallery,
       description: "Uma Galeria é o tipo de site criado principalmente para expôr fotos e vídeos, muito usado por designers gráficos e fotógrafos, mas também pode ser útil para quem precisa causar impacto nos clientes com o resultado final de seu trabalho, como manicures, cabeleireiros e arquitetos, por exemplo"
      },
     ]
    }/>
    <Paragraph text="E então? Qual desses sites é o que você precisa? Entre em contato pelo botão abaixo e 
    converse comigo para criarmos um site de acordo com suas necessidades"/>
    <div className={style.buttonLine}>
     <FlatButton label={"Quero um Site"} icon="socialwhatsapp-icon-dark" path={WhatsAppLink} title={"Entrar em contato pelo WhatsApp"} type="primary"/>
    </div>
   </article>
  </>
 )
}