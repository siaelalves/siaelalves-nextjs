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
import Topic from "@/components/Topic/Topic"
import ListItem from "@/components/ListItem/ListItem"
import Link from "next/link"
import Schema from "@/components/Schema/Schema"

export const metadata = {
 title: "Como funcionam os planos de hospedagem - Siael Alves",
 description: "Entenda melhor como os planos de hospedagem funcionam e calcule o custo do seu site antes de criá-lo! Entre em contato comigo para fazer um orçamento",
 author: "Siael Alves",
 creator: "Siael Alves",
 thumbnail: "",
 url: "https://siaelalves.com.br/duvidas/como-funcionam-os-planos-de-hospedagem",
 metadataBase: new URL('https://siaelalves.com.br'),
 icons: {
  icon: "favicon.svg"
 },
 alternates: {
  canonical: "https://siaelalves.com.br/duvidas/como-funcionam-os-planos-de-hospedagem"
 },
 openGraph: {
  title: "Como funcionam os planos de hospedagem - Siael Alves",
  description: "Entenda melhor como os planos de hospedagem funcionam e calcule o custo do seu site antes de criá-lo! Entre em contato comigo para fazer um orçamento",
  type: 'website',
  publishedTime: '2025-08-26T16:56:00.000Z',
  authors: ["Siael Alves"],
 }
};

export default function Page() {
 const WhatsAppLink = "https://api.whatsapp.com/send?phone=5532991223016&text=Ol%C3%A1%21%20Preciso%20conversar%20com%20voc%C3%AA%20sobre%20meu%20novo%20site%21"

 const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://siaelalves.com.br/duvidas/como-funcionam-os-planos-de-hospedagem"
  },
  headline: "Entenda melhor como os planos de hospedagem funcionam e calcule o custo do seu site antes de criá-lo!",
  image: "",
  author: {
    "@type": "Person",
    name: "Siael Alves",
    url: "https://siaelalves.com.br"
  },  
  publisher: {
    "@type": "Organization",
    name: "Siael Alves",
    logo: {
      "@type": "ImageObject",
      url: ""
    }
  },
  datePublished: "2025-08-26"
 }

 return (
  <>
   <Schema data={schema}/>
   <article className={style.content}>
    <Title title={"Como funcionam os planos de hospedagem"}/>
    <Paragraph text="Se você chegou aqui é porque já tem certeza de que quer um site para a sua empresa. Para ajudar 
    você a calcular quanto vai custar criar o seu site, eu preparei esta explicação para você não se perder!"/>

    <Paragraph>De modo simples, um plano de hospedagem funciona como o aluguel de uma loja física. Só que, ao invés 
     de alugar um espaço físico, você aluga um espaço na internet
    </Paragraph>

    <Paragraph>Para que a hospedagem do seu site funcione bem, você precisa escolher um bom plano de hospedagem, 
     com bons servidores e um nome de domínio. Entenda melhor o significado desses termos nos tópicos a seguir</Paragraph>

    <Topic topic={"O que é uma Hospedagem"}/>
    
    <Paragraph text="Hospedagem é um serviço de aluguel de servidor que permite que que seu site fique online 
    24 horas. Dependendo da empresa de hospedagem, é possível conseguir um desconto pagando vários anos adiantados ou 
    escolher um pagamento mensal"/>

    <Topic topic={"O que é um Servidor"}/>
    
    <Paragraph text="Servidor é um computador criado exclusivamente para responder a requisições e enviar dados 
    para outros computadores. Ele é chamado assim porque ele serve conteúdo para outros computadores"/>

    <Paragraph text="Um serviço de hospedagem utiliza vários servidores para as mais variadas funções. Dentre elas 
    estão o backup de sites, serviço de e-mail, armazenamento de arquivos, firewalls e muitas outras funções 
    necessárias"/>
    
    <Paragraph text="Por serem muitos computadores, a técnica utilizada para armazenar os arquivos é diferente do que 
    fazemos em casa. Quanto melhor o serviço de hospedagem, mais potente devem ser esses computadores e mais robustas 
    as técnicas utilizadas"/>

    <Topic topic={"O que é um Domínio"}/>

    <Paragraph text="Um domínio é o endereço do seu site na web. Para ter um domínio é necessário registrá-lo. Esse 
    registro pode ser feito por você ou pela empresa de hospedagem. O importante é que ele seja feito no seu nome 
    ou no nome da sua empresa para evitar problemas mais tarde"/>

    <Paragraph>Para domínios .com, há várias empresas que podem fazer esse registro, como GoDaddy, Hostgator e 
     Hostinger. Para domínios .com.br, o registro deve ser feito no site <a className="link" href="https://registro.br/">https://registro.br</a></Paragraph>

    <Paragraph>Um domínio precisa ser renovado todos os anos para permanecer ativo. Por isso, você precisa pagar uma 
     taxa anual para mantê-lo funcionando e deixar seu site acessível
    </Paragraph>

    <Topic>Conclusão</Topic>

    <Paragraph>Agora que você entende o básico sobre hospedagens, já é possível iniciar o processo de criação do seu 
     site.</Paragraph>

    {/* <ListItem items={
     [
      <Link className="link" href="/duvidas/como-colocar-seu-site-online">Como colocar seu site on-line</Link>
     ]
    }/> */}

    <Paragraph>Entre em contato comigo para que eu ajude você nesse processo!</Paragraph>

    <div className={style.buttonLine}>
     <FlatButton label={"Quero um Site"} icon="socialwhatsapp-icon-dark" path={WhatsAppLink} title={"Entrar em contato pelo WhatsApp"} type="primary"/>
     <FlatButton label={"Outras dúvidas"} icon="" path={"/duvidas"} title={"Ver lista de artigos"} type="terciary"/>
    </div>
   </article>
  </>
 )
}