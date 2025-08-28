export default function Schema({data}) {
 return (
  <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{
     __html: JSON.stringify(data).replace(/</g, '\\u003c'),
   }}
  />
 )
}