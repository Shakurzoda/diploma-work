import React from 'react';
import styles from './CoursItem.module.css'
import img from './img/python-svgrepo-com.svg'
import { CourseType, bgColors } from './CoursesProps';


type CourseItemProps = {
    idx: number,
} & CourseType



  
const CourseItem = ({title, name, level, idx}: CourseItemProps) => {

  function getColorByNumber(num: number): string {
    const index = num % bgColors.length;
    return bgColors[index];
    
}

  return (
    <article className={styles.card} style={{background: getColorByNumber(idx)}}>
        <div className={styles.card__wrraper}>
          <div className={styles.profesion}>
            <span>{title}</span>
          </div>
          <a href="">
            <h3>{name}</h3>
          </a>
          <span className={styles.level}>
            {level}
          </span>
        </div>
        <div className={styles.scnd}>
          <picture>
            <img src={img} alt="" className={styles.amg} />
          </picture>
        </div>
    </article>
  );
};

export default CourseItem;