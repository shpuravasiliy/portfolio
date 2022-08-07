import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form action="" className={style.formBlock}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                    ></textarea>
                </form>
                <a href=''>Отправить</a>
            </div>
        </div>
    );
};

export default Contacts;