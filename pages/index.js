import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Nav />
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <img src="me.jpg" alt="Photo of Benjamin Deltenre"/>
        </div>
        <div className={styles.headerText}>
          <h1>Benjamin Deltenre</h1>
          <h3>Full Stack Web Developer</h3>
        </div>
      </header>
      <section className={`${styles.section} ${styles.odd}`}>
        <div className={styles.sectionText}>
          <h2>About</h2>
          <p>
            I am a full stack web developer based in Ath, Belgium. Recently, I spent 2 years in Vancouver BC, Canada, developing features for TalentMarketplace, a top placement platform matching employers and candidates. I am fluent in French and English. You can find me on LinkedIn, email me or use the contact form at the bottom of this page.
          </p>
        </div>
      </section>
      <section className={`${styles.section} ${styles.even}`}>
        <div className={styles.sectionText}>
          <h2>Experience</h2>
          <h4>Talent Marketplace</h4>
          <p>
            Talent Marketplace is a top placement platform matching employers and candidates. For 2 years, I developed new features, improved existing ones, and fixed bugs. Starting September 2020, I also mentored a junior developer. I worked on both frontend and backend until a backend developer joined the team. Then I focused on the React frontend, collaborating with the backend developer. Although most of the features I worked on are not accessible to unregistered users, I had the opportunity to develop the employers’ landing pages (links), applying prototypes made by a designer with HTML, CSS and JavaScript (jQuery).
          </p>
        </div>
        <img src="/tmp.png" alt="Talent Marketplace"/>
      </section>
      <footer className={styles.odd}>

      </footer>
    </div>
  )
}
