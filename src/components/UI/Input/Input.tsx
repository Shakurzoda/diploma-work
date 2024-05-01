import styles from './Input.module.css';
import { InputProps } from './Input.props';

const Input = (): InputProps => {
    return <input type="text" className={styles.input} />;
};

export default Input;
