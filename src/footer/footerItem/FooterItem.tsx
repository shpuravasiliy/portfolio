import React, {FC} from 'react';
import style from './FooterItem.module.css';
import {socialMediaType} from '../../content/contentData';

type FooterItemPropsType = socialMediaType

const FooterItem: FC<FooterItemPropsType> = ({title, icon}) => {
    return (
        <div className={style.footerItemBlock}>
            <div className={style.title}>{title}</div>
        </div>
    );
};

export default FooterItem;