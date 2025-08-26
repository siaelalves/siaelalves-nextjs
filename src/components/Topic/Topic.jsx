import style from './topic.module.css'

export default function Topic({topic, children}) {
 return (
  <h3 className={style.topic}>{(topic) ? (topic) : (children)}</h3>
 )
}