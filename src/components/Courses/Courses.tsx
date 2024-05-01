import { CourseDirectionType, coursesDirections } from '../../pages/CoursesPage/variables';
import styles from './Corses.module.css';
import clsx from 'clsx';

type CoursesProps = {
    direction: CourseDirectionType;
    setDirection: React.Dispatch<
        React.SetStateAction<{
            title: string;
            directionName: string;
        }>
    >;
};

const Courses = ({ direction, setDirection }: CoursesProps) => {
    return (
        <div className={styles.content__wrapper}>
            <div className={styles.content}>
                <div className={styles.corses__name}>
                    <h1 className={styles.topName}>{direction.title}</h1>
                </div>
                <div className={styles.courses__items}>
                    {coursesDirections.map((directionElement) => {
                        return (
                            <div
                                key={directionElement.directionName}
                                className={clsx(styles.item, {
                                    [styles.activeItem]: direction === directionElement
                                })}
                                onClick={() => setDirection(directionElement)}>
                                {directionElement.title}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Courses;
