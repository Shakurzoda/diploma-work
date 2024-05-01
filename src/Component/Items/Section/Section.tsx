import React from 'react';
import styles from  './Section.module.css'


const Section = () => {
    return (
        <div className={styles.cointeiner}>
       <section className={styles.section__bar}>
          <div>
            <h1>Hello, world</h1>
          </div>
      </section>
      <section className={styles.section__bar}>
          <div>
            <h1>Hello, world</h1>
          </div>
      </section>
        </div>
    );
};

export default Section;