import Paragraph from "@/components/Paragraph/Paragraph";
import Title from "@/components/Title/Title";
import Link from "next/link";
import { Children } from "react";

export default function Articles({children}) {
 return(
  <>
   <Title title="Lista de artigos"/>

   <Link href="/artigos/como-funcionam-os-planos-de-hospedagem">Como funcionam os planos de hospedagem</Link>
   <Link href="/artigos/conheca-os-diferentes-tipos-de-site">Conheça os diferentes tipos de site</Link>
  </>
 )
}