import React, { useState } from 'react';
import Courses from '../../Component/Courses/Courses';
import CourseItem from '../../Component/CoursPage/CoursItem';
import { coursesDirections } from './variables';
import { coursesDirectionsOps } from '../../Component/CoursPage/CoursesProps';
import styles from './CoursesPage.module.css'

const CoursesPage = () => {

    const [direction, setDirection] = useState(coursesDirections[0])

    return (
        <div>
            <Courses direction={direction} setDirection={setDirection} />
            <ul className={styles.corsesList}>
            {coursesDirectionsOps.map((course, idx) => {
                return (
                    <li key={course.title}>
                        <CourseItem title={course.title} name={course.name} level={course.level} idx={idx}/> 
                    </li>
                )
            })}
            </ul>
        </div>
    );
};

export default CoursesPage;