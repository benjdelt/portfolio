import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <FontAwesomeIcon icon={faSpinner} pulse />
    </div>
  );
}

export default Loader;
