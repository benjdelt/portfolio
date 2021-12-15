import Link from 'next/link';
import styles from '../styles/Nav.module.css';

function Nav() {
  return (
    <nav  className={styles.navBar}>
      <ul>
        <li><Link href="/">Presentation </Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>  
  )
}

export default Nav;