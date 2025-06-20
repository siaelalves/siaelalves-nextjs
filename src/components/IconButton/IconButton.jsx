
/**
 * 
 * @param {string} icon Classe do ícone dentro do CSS global que 
 * representa um caractere de uma font de ícone.
 * @returns 
 */
export default function IconButton({url, icon, title}) {
 return (
  <>
   <span className={icon} title={title}></span>
  </>
 )
}