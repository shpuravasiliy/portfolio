import React, {FC} from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css';
import FooterItem from './footerItem/FooterItem';

type FooterPropsType = {
    fullName: string
}

const Footer: FC<FooterPropsType> = (props) => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>{props.fullName}</h3>
                <div className={style.contactsBlock}>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                </div>
                <h3>© 2022 Все права защищены</h3>
            </div>
        </div>
    );
};

export default Footer;