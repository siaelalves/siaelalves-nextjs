import { Geist, Geist_Mono } from "next/font/google";
import "../css/global.css";
import MenuBar from "@/components/MenuBar/MenuBar";
import PageNavigation from "@/components/PageNavigation/PageNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Siael Alves - Programador e Web Designer",
  description: "Sites Institucionais, Landing Pages, Blogs e Catálogos On-line. Entre em contato para fazer um orçamento",
  author: "Siael Alves",
  creator: "Siael Alves",
  thumbnail: "",
  url: "https://siaelalves.com.br",
  metadataBase: new URL('https://siaelalves.com.br'),
  alternates: {
   canonical: ""
  },
  openGraph: {
   title: "Siael Alves - Programador e Web Designer",
   description: "Sites Institucionais, Landing Pages, Blogs e Catálogos On-line. Entre em contato para fazer um orçamento",
   type: 'website',
   publishedTime: '2025-06-20T10:23:00.000Z',
   authors: ["Siael Alves"],
  }
};

export default function RootLayout({ children }) {
  return (
   <html id="rootLayout" lang="pt-br">
    <body>
     <MenuBar/>
     {children}
     <PageNavigation/>
    </body>
   </html>
  );
}
