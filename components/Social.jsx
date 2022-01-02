import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/components/Social.module.css';

function Social() {
  return (
    <ul className={styles.social}>
      <li>
        <a href="mailto:benjdelt@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/benjdelt" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="https://github.com/benjdelt" target="_blank" rel="noopener noreferrer" title="Github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  );
}

export default Social;
