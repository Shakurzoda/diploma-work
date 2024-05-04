import styles from './Header.module.css';
import logo from './img/logo.svg';
import { Button } from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '');

    return (
        <header className={styles.header}>
            <div className={styles.heade__wrapper}>
                <div className={styles.logo}>
                    <Link to="">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <nav className={styles.header__navbar}>
                    <ul className={styles.header__navig}>
                        <li className={styles.link}>
                            <Link to="">Главная</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to="courses">Курсы</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to="http://tgfeu.tj/ru/about_the_university/news/">Новости</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to="addcourses">Добавить материалы</Link>
                        </li>
                        <li className={styles.link}>
                            <Button>
                                <Link to="auth">Войти</Link>
                            </Button>
                        </li>
                    </ul>
                </nav>
                <div>
                    {currentUser?.login && (
                        <div>
                            <span> {currentUser.login}</span>
                            <span> {currentUser.role}</span>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
