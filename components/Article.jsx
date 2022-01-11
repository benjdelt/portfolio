import Image from 'next/image';
import styles from '../styles/components/Article.module.css';

function Article({ image, title, text, icons, leftSideImg }) {

  const sideImgClass = leftSideImg ? styles.imgLeft : styles.imgRight;

  return (
    <article className={`${styles.article} ${sideImgClass}`}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>
        {text}
        <span className={styles.logos}>
          {icons.map(icon => icon)}
        </span>
      </p>
      <div className={styles.img}>
        <Image src={image} alt={title} height={199} width={320} srcSet="2x"/>
      </div>
    </article>
  )
}

export default Article;
