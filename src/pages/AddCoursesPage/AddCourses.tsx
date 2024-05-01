import React from 'react';
import styles from './AddCourses.module.css'
import { ImportOutlined } from '@ant-design/icons';
import {  Button, Mentions  } from 'antd';
import { Select } from 'antd';



const AddCourses = () => {

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

    return (
        <main className={styles.mainCoiteiner}>
            <h1>
                Добавить курс
            </h1>
            <section>
            <article className={styles.conteiner}>
                <div>
                    <h5>Названия курса</h5>
                <Mentions allowClear />
                </div>
                <br />
<div>
    <h5>Описание курса</h5>
      <Mentions allowClear rows={3} />
</div>
<br />
<div>
    <h5> Выберите категорию</h5>
  <Select
    defaultValue="Выберите категорию"
    style={{ width: 200 }}
    onChange={handleChange}
    options={[
      {
        label: <span>Программирование</span>,
        title: 'Программирование',
        options: [
          { label: <span>Бэкенд-разработка</span>, value: 'backend-dev' },
          { label: <span>Веб-разработка</span>, value: 'frontend-dev' },
          { label: <span>Мобильная разработка</span>, value: 'mobiel-dev' },
          { label: <span>Анализ данных</span>, value: 'data-science' },
          { label: <span>IT-инфраструктура</span>, value: 'it-infrstr' },
        ],
      },
      {
        label: <span>Экономика</span>,
        title: 'economic',
        options: [
          { label: <span>Банковское дело</span>, value: 'banking' },
          { label: <span>Бухгалтерия</span>, value: 'accounting' },
        ],
      },
        {
        label: <span>Менеджмент</span>,
        title: 'management',
        options: [
          { label: <span>Менеджмент</span>, value: 'management' },
        ],
      },
        {
        label: <span>Психология</span>,
        title: 'Psychology',
        options: [
          { label: <span>Психология</span>, value: 'Psychology' },
        ],
      },
        {
        label: <span>Иностранные языки</span>,
        title: 'ForeignLanguages',
        options: [
          { label: <span>Английский</span>, value: 'english' },
          { label: <span>Русский</span>, value: 'russia' },
          { label: <span>Французкий</span>, value: 'french' },
        ],
      },
    ]}
  />
</div>
<br />
<div className={styles.butt}>
            <Button className={styles.buttt} type="primary" icon={< ImportOutlined/>}>
            Добавить курс
          </Button>
</div>
            </article>
            </section>
        </main>
    );
};

export default AddCourses;