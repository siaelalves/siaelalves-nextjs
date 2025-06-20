export default function Metadata({title, author, description, thumbnail, siteName, path}) {
 return (
  <>
   <title>{title + " - " + author}</title>
   <meta httpEquiv="content-language" content="pt-br"/>

   <meta name="description" content={description}/>
   <meta name="author" content={author}/>
   <meta name="creator" content={author}/>
   <meta name="thumbnail" content={thumbnail}/>
   
   <meta property="og:description" content={description}/>
   <meta property="og:title" content={title}/>
   <meta property="og:url" content={path}/>
   <meta property="og:site_name" content={siteName}/>
   <meta property="og:locale" content="pt_BR"/>
   <meta property="og:type" content="website"/>
   <meta property="og:image" content={thumbnail}/>
   <meta property="og:image:width" content="1200"/>
   <meta property="og:image:height" content="630"/>

   <meta name="twitter:text:title" content={title}/>
   <meta name="twitter:image" content={thumbnail}/>
   <meta name="twitter:card" content="summary_large_image"/>
  </>
 )
}