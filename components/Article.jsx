import Image from 'next/image';
import styles from '../styles/Article.module.css';

function Article({ image, title, text, leftSideImg }) {

  const sideImgClass = leftSideImg ? styles.imgLeft : styles.imgRight;

  return (
    <article className={`${styles.article} ${sideImgClass}`}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <div className={styles.img}>
        {/* <img src={image} alt={title}/> */}
        {/* <Image src={image} alt={title} height={232} width={480} layout="fixed"/> */}
        <Image src={image} alt={title} height={232} width={480} srcSet="2x"/>
        {/* <Image src={image} alt={title} height={232} width={480} /> */}
      </div>
    </article>
  )
}

export default Article;
