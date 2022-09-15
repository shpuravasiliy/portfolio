import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${style.container}`}>
                <div className={style.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Шпура Василий.</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;