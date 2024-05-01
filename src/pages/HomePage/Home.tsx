import styles from './Home.module.css';
import Section from '../../components/Section/Section';
import mainImg from './img/main_landing_hero.svg';

const App = () => {
    return (
        <article className={styles.top__section}>
            <header className={styles.header__title}>
                <div className={styles.teext}>
                    <h5 className={styles.welcome}>
                        ДОБРО ПОЖАЛОВАТЬ В ТАДЖИКСКИЙ ФИНАНСОВО-ЭКОНОМИЧЕСКИЙ УНИВЕРСИТЕТ
                    </h5>
                    <h5 className={styles.up}>ТГФЭУ - Развитие высшего образования</h5>
                    <p className={styles.greytxt}>
                        Таджикский финансово-экономический университет является ведущим высшим
                        учебным заведением, стремящимся продвигать инновационное обучение,
                        исследования и участие общества. Наша миссия – подготовить следующее
                        поколение лидеров, которые будут способствовать прогрессу, инновациям и
                        социальным изменениям в Таджикистане и за его пределами.
                    </p>
                </div>
                <picture>
                    <img src={mainImg} alt="" className={styles.imgMain} />
                </picture>
            </header>
            <Section />
            {/*       <div>
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=sph" alt="" />
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=sph" alt="" />
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=sph" alt="" />
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=sph" alt="" />
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=sph" alt="" />
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=sph" alt="" />
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=sph" alt="" />
      </div> */}
        </article>
    );
};

export default App;
