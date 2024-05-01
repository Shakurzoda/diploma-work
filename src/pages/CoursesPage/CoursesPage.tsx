import { useState } from 'react';
import CourseItem from '@components/CoursPage/CoursItem';
import Courses from '@components/Courses/Courses';
import { coursesDirections } from './variables';
import { coursesDirectionsOps } from '@components/CoursPage/CoursesProps';
import styles from './CoursesPage.module.css';

const CoursesPage = () => {
    const [direction, setDirection] = useState(coursesDirections[0]);

    return (
        <div>
            <Courses direction={direction} setDirection={setDirection} />
            <ul className={styles.corsesList}>
                {coursesDirectionsOps.map((course, idx) => {
                    return (
                        <li key={course.title}>
                            <CourseItem
                                title={course.title}
                                name={course.name}
                                level={course.level}
                                idx={idx}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CoursesPage;
