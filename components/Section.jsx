import styles from '../styles/Section.module.css';


function Section({ children, background }) {

  const bgClass = background ? styles.bgColor : "";

  return (
    <section className={`${styles.section} ${bgClass}`}>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  )
}

export default Section;
