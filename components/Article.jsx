import styles from '../styles/Article.module.css';

function Article({ image, title, tags, text }) {
  return (
    <article className={styles.article}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <div className={styles.img}>
        <img src={image} alt={title} />
      </div>
    </article>
  )
}

export default Article;
