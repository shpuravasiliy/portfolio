import React, {FC} from 'react';
import style from './FooterItem.module.css';

type FooterItemPropsType = {

}

const FooterItem: FC<FooterItemPropsType> = (props) => {
    return (
        <div className={style.footerItemBlock}>
        </div>
    );
};

export default FooterItem;