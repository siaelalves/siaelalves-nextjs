import Schema from '@/components/Schema/Schema';
import Header from '../components/Header/Header';

export default function Homepage() {
 const schema = { 
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Siael Alves",
  url: "https://siaelalves.com.br",
  image: "",
  sameAs: [
    "https://siaelalves.com.br",
    "https://github.com/siaelalves"
  ],
  jobTitle: "Programador e Web Designer"
 }

 return (
  <>
   <Schema data={schema}/>
   <Header/>   
  </>
 )
}