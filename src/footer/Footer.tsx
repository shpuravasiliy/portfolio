import React, {FC} from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css';
import FooterItem from './footerItem/FooterItem';
import {socialMediaType} from '../content/contentData';

type FooterPropsType = {
    fullName: string,
    socialMedia: socialMediaType[]
}

const Footer: FC<FooterPropsType> = ({fullName, socialMedia}) => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>{fullName}</h3>
                <div className={style.contactsBlock}>
                    {socialMedia.map(sm => <FooterItem key={sm.title} {...sm}/>)}
                </div>
                <h3>© 2022 Все права защищены</h3>
            </div>
        </div>
    );
};

export default Footer;