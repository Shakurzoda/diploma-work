import { ReactTyped } from 'react-typed';
import styles from './TxtTyped.module.css';

const TxtTyped = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {' '}
                <ReactTyped
                    strings={['Hello, world', 'Развивайся', 'Develop yourself']}
                    typeSpeed={70}
                    loop
                    backSpeed={100}
                    cursorChar="|"
                    showCursor={true}
                    className={styles.gen}
                />
            </h1>
        </div>
    );
};

export default TxtTyped;
