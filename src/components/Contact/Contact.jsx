import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      <div className={styles.details}>
        <div>
          <span className={styles.icon}>
            <FaUser />
          </span>
          <span className={styles.name}>{name}</span>
        </div>
        <div>
          <span className={styles.icon}>
            <FaPhoneAlt />
          </span>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button className={styles.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
